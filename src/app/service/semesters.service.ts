import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class SemestersService {

  constructor(private http:HttpClient, private api:ApiService) { }

  load(){
    return this.http.get(this.api.url.semesters)
  }
  add(data1, data2, data3){
    return this.http.post(this.api.url.semesters,{semsemester:data1, semyear:data2, semiscurrent:data3})
  }
  edit(data1, data2, data3, data4){
    return this.http.put(this.api.url.semesters,{sem_id:data1, semsemester:data2, semyear:data3, semiscurrent:data4})
  }
  delete(id){
    return this.http.patch(this.api.url.semesters,{sem_id:id})
  }
}
