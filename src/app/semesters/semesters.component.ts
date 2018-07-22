// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs/Subject'; 

import { SemestersService } from '../service/semesters.service';
import { PnotifyService } from '../service/pnotify.service';

declare var $:any;

@Component({
selector: 'app-semesters',
templateUrl: './semesters.component.html',
styleUrls: ['./semesters.component.css']
})
export class SemestersComponent {
dtOptions: any={
retrieve:true,
dom: 'Btftip',
button: [
'colvis',
'copy',
'print',
'excel',
'pdf'
]
};
data:any;
dtTrigger: Subject<any> = new Subject();
results: any;
detail: any;
title:any;

semsemester: any;
semyear: any;
semstatus: any;

change_var :any;
unique_var :any;

constructor(private semesters:SemestersService, private pnotifyService: PnotifyService) { }

ngOnInit() {
this.pnotifyService.getPNotify().defaults.styling = 'bootstrap4'; this.pnotifyService.getPNotify().defaults.icons = 'fontawesome4';
$.getScript('assets/js/semesters.js');
this.load();
}

load(){
this.semesters.load().subscribe(data => {
this.results =(<any>data).data;
this.dtTrigger.next();
})
}

save_add(){
this.semesters.add(this.semsemester,this.semyear, this.semstatus).subscribe(data => {
this.load();
this.pnotifyService.getPNotify().success({
text:(<any>data).message
});

})
}

save_edit(){
this.semesters.edit(this.detail.sem_id,this.semsemester,this.semyear, this.semstatus).subscribe(data => {
this.load();
this.pnotifyService.getPNotify().success({
text:(<any>data).message
});
})
}

delete(sem_id){
$.confirm({
title: 'Confirm!',
content: 'Are you sure want to delete ?',
buttons: {
confirm: () => {
this.semesters.delete(sem_id).subscribe(data => {
this.load();
this.pnotifyService.getPNotify().success({
text:(<any>data).message
});
});
},
cancel: () =>{}
}
});
}

change_state(){
if(this.change_var==1){
this.save_add();
}
else{
this.save_edit();
}
}

state(state,sem_id){
switch(state){
case 1:
this.semsemester=null;
this.semyear=null;
this.semstatus=null;
this.change_var=1;
this.title = 'Add';
break;
case 2:
this.detail = this.results.find(obj => obj.sem_id === sem_id);
this.semsemester=this.detail.semsemester;
this.semyear=this.detail.semyear;
this.semstatus=this.detail.semiscurrent;
this.change_var=2;
this.title = 'Edit';
break;
}
}

unique(){
this.unique_var = this.results.find(obj => obj.subcode === this.semsemester);
}
}
