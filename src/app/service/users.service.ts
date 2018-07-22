import { Injectable } from '@angular/core';
import { ApiService }   from './api.service';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class UsersService 
{
constructor(private http:HttpClient,private api:ApiService) { }
load()
{
return this.http.get(this.api.url.users)
}
add(data1,data2){
return this.http.post(this.api.url.users,{useaccount: data1 ,useenc_password:data2})
}
delete(id)
{
return this.http.patch(this.api.url.users,{use_id: id})
}
active(id){
return this.http.put(this.api.url.users,{use_id: id})	
}
}
