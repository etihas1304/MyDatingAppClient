import { Component, OnInit } from '@angular/core';
import {MembersService} from '../services/members.service';
import {Member} from '../models/member';
import { Observable } from 'rxjs';
import { Pagination } from '../models/pagination';
import { AccountService } from '../services/account.service';
import { UserParams } from '../models/userParams';
import { User } from '../models/user';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members:Member[];
  pagination:Pagination;
  userParams:UserParams;
  user:User;
  genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];
  
  constructor(private memberService: MembersService) {
  this.userParams= this.memberService.getUserParams();
   }

  ngOnInit(): void {
    this.loadMembers();
  }
  loadMembers()
  {
    this.memberService.setUserParams(this.userParams);
    this.memberService.getMembers(this.userParams).subscribe(res=>{
      this.members=res.result;
      this.pagination=res.pagination;
    })
  }
  pageChanged(event:any)
  {
    this.userParams.pageNumber=event.page;
    this.memberService.setUserParams(this.userParams);
    this.loadMembers();
  }
  resetFilters() {
    this.userParams= this.memberService.resetUserParams();
    this.loadMembers();
  }
}
