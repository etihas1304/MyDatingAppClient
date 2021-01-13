import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 model:any={};
 @Output() registerMode =new EventEmitter();
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(res=>{
      console.log(res);
      this.cancel();
    },error=>{console.log(error)
     } );
  }

  cancel(){
    this.registerMode.emit(false);
  }


}
