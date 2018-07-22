import { Component, OnInit } from '@angular/core';
import {Cookies} from '@cedx/ngx-cookies';
import { Router } from '@angular/router';
import { LoginService }   from '../service/login.service';
import { ApiService }   from '../service/api.service';
import { PnotifyService } from '../service/pnotify.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private logins:LoginService,private api:ApiService, private cookies: Cookies, private router: Router,private pnotifyService: PnotifyService) { this.pnotifyService.getPNotify().defaults.styling = 'bootstrap4';this.pnotifyService.getPNotify().defaults.icons= 'fontawesome4';}
username:any;
password:any;
ngOnInit() {
}
login(){
this.logins.login(this.username,this.password).subscribe(data => {
if(!(<any>data).data){
this.pnotifyService.getPNotify().error({
text:(<any>data).message
});
}
else{
this.cookies.setObject( 'user', (<any>data).data,new Date(Date.now() + 1800000) );	
this.router.navigate(['/subjects']);
this.pnotifyService.getPNotify().success({
text:(<any>data).message
});
}
});
}



}
