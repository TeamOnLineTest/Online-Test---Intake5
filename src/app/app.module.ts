import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {CookieModule} from '@cedx/ngx-cookies';
import { CKEditorModule } from 'ng2-ckeditor';

import { ApiService } from './service/api.service';
import { PnotifyService } from './service/pnotify.service';
import { AuthService } from './service/auth.service';
import { SubjectsService } from './service/subjects.service';
import { QuestionsService } from './service/questions.service';
import { LoginService } from './service/login.service';
import { UsersService } from './service/users.service';
import { TakersService } from './service/takers.service';

import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

import { SubjectsComponent } from './subjects/subjects.component';
import { TakersComponent } from './takers/takers.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { QuestionsComponent } from './questions/questions.component';

import { routing } from './app.routing';


@NgModule({
declarations: [
AppComponent,
MasterComponent,
HeaderComponent,
SidebarComponent,
FooterComponent,
LoginComponent,
UsersComponent,
SubjectsComponent,
TakersComponent,
ProfileSettingComponent,
QuestionsComponent,
],
imports: [
BrowserModule,
DataTablesModule,
CookieModule,
FormsModule,
CKEditorModule,
HttpClientModule,
routing
],
providers: [
ApiService,
LoginService,
SubjectsService,
QuestionsService,
UsersService,
TakersService,
{
provide: HTTP_INTERCEPTORS,
useClass: AuthService,
multi: true
},
PnotifyService
],
bootstrap: [AppComponent]
})
export class AppModule { }
