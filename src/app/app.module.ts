import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import {ToastrModule} from 'ngx-toastr';
import { TestErrorsComponent } from './test-errors/test-errors.component'
import {ErrorsInterceptor} from './interceptors/errors.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { MemberCardComponent } from './member-card/member-card.component';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {LoadingInterceptor} from './interceptors/loading.interceptor';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { TextInputComponent } from './forms/text-input/text-input.component';
import{BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { DateInputComponent } from './forms/date-input/date-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailsComponent,
    ListsComponent,
    MessagesComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MemberCardComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    TextInputComponent,
    DateInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    }),
    TabsModule.forRoot(),
    NgxGalleryModule,
    NgxSpinnerModule,
    FileUploadModule
    
  ],
  providers: [HttpClient,
  {provide:HTTP_INTERCEPTORS,useClass:ErrorsInterceptor,multi:true},
  {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
  {provide:HTTP_INTERCEPTORS,useClass: LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
