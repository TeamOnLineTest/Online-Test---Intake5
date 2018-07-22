import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { SubjectsService }   from '../service/subjects.service';
import { PnotifyService } from '../service/pnotify.service';

declare var $:any;

@Component({
selector: 'app-subjects',
templateUrl: './subjects.component.html',
styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
dtOptions: any= {
retrieve: true,
dom: 'Bfrtip',
buttons: [
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
results_parent: any;
detail: any;
title:any;

subjectcode: any;
subjectname: any;
parent_id:any;

change_var :any;
unique_var :any;

constructor(private subjects:SubjectsService,private pnotifyService: PnotifyService) {}
ngOnInit(){
this.pnotifyService.getPNotify().defaults.styling = 'bootstrap4';this.pnotifyService.getPNotify().defaults.icons= 'fontawesome4';
$.getScript('assets/js/subjects.js');
this.load();	
}

load(){
this.subjects.load().subscribe(data => {
this.results =(<any>data).data;
this.dtTrigger.next();
})
}

load_parent(parent_id){
this.subjects.load_parent(parent_id).subscribe(data => {
this.results_parent =(<any>data).data;
})
}

save_add(){
this.subjects.add(this.subjectcode,this.subjectname).subscribe(data => {
this.load();
this.pnotifyService.getPNotify().success({
text:(<any>data).message
});

})
}

save_edit(){
this.subjects.edit(this.detail.sub_id,this.subjectcode,this.subjectname).subscribe(data => {
this.load();
this.pnotifyService.getPNotify().success({
text:(<any>data).message
});
})
}

delete(id){
$.confirm({
title: 'Confirm!',
content: 'Are you sure want to delete ?',
buttons: {
confirm: () => {
this.subjects.delete(id).subscribe(data => {
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

state(state,id){
switch(state){
case 1:
this.subjectcode=null;
this.subjectname=null;
this.parent_id=null;
this.change_var=1;
this.title = 'Add';
break;
case 2:
this.detail = this.results.find(obj => obj.sub_id === id);
this.subjectcode=this.detail.subcode;
this.subjectname=this.detail.subname;
this.parent_id=this.detail.parent_id;
this.change_var=2;
this.title = 'Edit';
break;
}
}

unique(){
this.unique_var = this.results.find(obj => obj.subcode === this.subjectcode);
}

}