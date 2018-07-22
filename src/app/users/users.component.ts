import { Component} from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { UsersService }   from '../service/users.service';
import { PnotifyService } from '../service/pnotify.service';

declare var $:any;

@Component({
selector: 'app-users',
templateUrl: './users.component.html',
styleUrls: ['./users.component.css']
})
export class UsersComponent {
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

useaccount:any;
useenc_password:any;

data:any;
dtTrigger: Subject<any> = new Subject();
results: any;

constructor(private users:UsersService,private pnotifyService: PnotifyService) { }
ngOnInit() {
$.getScript('assets/js/users.js');
this.load();
}


load(){
this.users.load().subscribe(data => {
this.results =(<any>data).data;
this.dtTrigger.next();
})
}

save_add(){
this.users.add(this.useaccount,this.useenc_password).subscribe(data => {
this.load();
this.pnotifyService.getPNotify().success({
text:(<any>data).message
});
})
}
active(id){
this.users.active(id).subscribe(data => {
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
this.users.delete(id).subscribe(data => {
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
}