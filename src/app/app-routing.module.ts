import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import{AuthGuard} from './auth.guard';
const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate: [AuthGuard], 
    children:[
    {path:'members' ,component:MemberListComponent},
    {path:'members/:id' ,component:MemberDetailsComponent},
    {path:'lists' ,component:ListsComponent},
    {path:'messages' ,component:MessagesComponent}
  ]
  },
  
  {path:'**' ,component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }