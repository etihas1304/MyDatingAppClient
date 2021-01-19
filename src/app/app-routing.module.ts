import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import{AuthGuard} from './auth.guard';
import { TestErrorsComponent } from './test-errors/test-errors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { PreventUnsavedChangesGuard} from './prevent-unsaved-changes.guard';
const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate: [AuthGuard], 
    children:[
    {path:'members' ,component:MemberListComponent},
    {path:'members/:username' ,component:MemberDetailsComponent},
    {path:'member/edit' ,component:MemberEditComponent ,canDeactivate:[PreventUnsavedChangesGuard]},
    {path:'lists' ,component:ListsComponent},
    {path:'messages' ,component:MessagesComponent}
  ]
  },
  {path:'errors',component:TestErrorsComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'server-error',component:ServerErrorComponent},
  {path:'**' ,component:NotFoundComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
