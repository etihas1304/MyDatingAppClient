import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

 baseUrl=environment.apiUrl;
 private currentUserSource=new ReplaySubject<User>(1);
 currentUser$=this.currentUserSource.asObservable();
 
 constructor(private http:HttpClient) { }
 
 login(model:any){
   return this.http.post(this.baseUrl+'account/login',model).pipe(
     map((res:User)=>{
       const user=res;
       if(user){
         this.serCurrentUser(user);
       }
     })
   );
 }
 serCurrentUser(user:User){
  localStorage.setItem('user',JSON.stringify(user));
  this.currentUserSource.next(user);
}

register(model:any){
  return this.http.post(this.baseUrl+'account/register',model).pipe(
    map((user:User)=>{
      this.serCurrentUser(user);
        return user;
      } 
    )
  );
  }

 logout()
 {
   localStorage.removeItem('user');
   this.currentUserSource.next(null);
 }
}
