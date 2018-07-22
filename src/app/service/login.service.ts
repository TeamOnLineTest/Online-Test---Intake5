import { Injectable } from '@angular/core';
import { ApiService }   from './api.service';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

constructor(private http:HttpClient,private api:ApiService) { }

login(user,pass){
return this.http.post(this.api.url.login,{useaccount:user,useenc_password:pass});
}
}
