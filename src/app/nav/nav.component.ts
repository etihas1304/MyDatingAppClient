import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AccountService} from '../services/account.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model:any={};
  constructor(public accountService:AccountService,private route:Router,
    private toastr:ToastrService ) { }

  ngOnInit(): void {
    
  }
  
  login()
  {
   console.log(this.model);
   this.accountService.login(this.model).subscribe(res=>{
     this.route.navigateByUrl('/members');
   },error=>{
     console.log(error);
     this.toastr.error(error.error);
   })
  }
  logOut()
  {
    this.accountService.logout();
    this.route.navigateByUrl('/');
  }
 

}
