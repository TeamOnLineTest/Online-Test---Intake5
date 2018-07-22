import { Component} from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { QuestionsService }   from '../service/questions.service';
import { PnotifyService } from '../service/pnotify.service';
declare var $:any;
@Component({
selector: 'app-questions',
templateUrl: './questions.component.html',
styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {

quescore:any;
quesisshuffle:any;
quesreference:any;
ckeditorContent:any;

check_value:any;

detail:any;
data:any;
options:any[]=[];
dtTrigger: Subject<any> = new Subject();
results: any;

title:any;
change_var:any;

constructor(private questions:QuestionsService,private pnotifyService: PnotifyService) { }

ngOnInit() {
this.pnotifyService.getPNotify().defaults.styling = 'bootstrap4';this.pnotifyService.getPNotify().defaults.icons= 'fontawesome4';
$.getScript('assets/js/questions.js');
this.load();
}

load(){
this.questions.load().subscribe(data => {
this.results =(<any>data).data;
this.dtTrigger.next();
})
}

save_add(){
for (var i=0,j=0; i < $('input[name^="options"]').length && j < $('input[name^="choose"]').length; i++,j++) {		
this.options.push({optcontent :$('input[name^="options"]')[i].value,optiscorrect:$('input[name^="choose"]')[i].value});
}

this.questions.add(this.ckeditorContent,this.quescore,this.quesisshuffle,this.quesreference,this.options).subscribe(data => {
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
this.questions.delete(id).subscribe(data => {
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

true_false(){
$('input[id^="true"]').val("True");
$('input[id^="false"]').val("False");
}
yes_no(){
$('input[id^="true"]').val("Yes");
$('input[id^="false"]').val("No");
}

reset(){
if(this.change_var==1){
}
else
for (var i=0; i < this.detail.options.length-2; i++) {
$('#options > .form-group').last().remove();	
}
}

state(state,id){
switch(state){
case 1:
this.ckeditorContent=null;
this.quescore=null;
this.quesisshuffle=null;
this.quesreference=null;
for (var i=0;i < $('input[name^="choose"]').length; i++) {		
$('input[name^="options"]')[i].value=null;
}
this.change_var=1;
this.title = 'Add';
break;
case 2:
this.detail = this.results.find(obj => obj.que_id == id);
this.ckeditorContent=this.detail.quecontent;
this.quescore=this.detail.quescore;
console.log(this.detail.options.length);

for (var i=0; i < this.detail.options.length-2; i++) {
var alphabet = String.fromCharCode(65 + $('#options > .form-group').length);
var row = '<div class="form-group row">' +        
'<div class="col-sm-1 offset-sm-2">' +
'<p class="form-control-plaintext">'+ alphabet +'. <input type="checkbox" class="checkbox" value="1"  name="choose"></p>' +
'</div>' +
'<div class="col-sm-9">' +
'<input type="text" class="form-control sem-semester" name="options" placeholder="Option">' + 
'</div>' +
'</div>';
$('#options').append(row);
var lastCheckbox = $('#options > .form-group').last().find('input[type=checkbox]');
$(lastCheckbox).iCheck({
checkboxClass: 'icheckbox_square',
radioClass: 'iradio_square',
increaseArea: '20%'
});
}

for (var i=0,j=0; i < this.detail.options.length && j < $('input[name^="choose"]').length; i++,j++) {		
$('input[name^="options"]')[i].value=this.detail.options[i].optcontent
}
this.change_var=2;
this.title = 'Edit';
break;
}
}


}
