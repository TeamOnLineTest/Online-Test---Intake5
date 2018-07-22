import { Injectable } from '@angular/core';
import { ApiService }   from './api.service';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class QuestionsService {

constructor(private http:HttpClient,private api:ApiService) { }

load(){
return this.http.get(this.api.url.questions);
}

add(data1,data2,data3,data4,data5)
{
return this.http.post(this.api.url.questions,{quecontent: data1,quescore: data2,quesisshuffle: data3,quesreference:data4 ,options:data5})
}
edit(data1,data2,data3,data4,data5)
{
return this.http.post(this.api.url.questions,{quecontent: data1,quescore: data2,quesisshuffle: data3,quesreference:data4 ,options:data5})
}
delete(id)
{
return this.http.patch(this.api.url.questions,{que_id: id})
}
}
