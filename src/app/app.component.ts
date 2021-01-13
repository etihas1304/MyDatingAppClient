import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dating-app';

  constructor(private acoountService:AccountService){

  }
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser()
  {
    const user:User=JSON.parse(localStorage.getItem('user'));
    this.acoountService.serCurrentUser(user);

  }

  
}
