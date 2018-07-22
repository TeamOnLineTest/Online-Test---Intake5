import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {Cookies} from '@cedx/ngx-cookies';

@Injectable()
export class ApiService {
constructor(private cookies : Cookies, private router: Router) { }
baseUrl='http://localhost:3000/';

checktoken(){
if(this.cookies.length==0){
this.router.navigate(['/login']);
}
}
url ={
login:this.baseUrl + 'login',
subjects:this.baseUrl +'api/subjects',
subjects_parent:this.baseUrl +'api/subjects_parent',
questions:this.baseUrl +'api/questions',
labs:this.baseUrl +'api/labs',
takers:this.baseUrl +'api/takers',
semesters:this.baseUrl + 'api/semesters',
users:this.baseUrl +'api/users'
}

}
