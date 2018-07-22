import { Component} from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { TakersService }   from '../service/takers.service';
import { PnotifyService } from '../service/pnotify.service';

declare var $:any;

@Component({
selector: 'app-takers',
templateUrl: './takers.component.html',
styleUrls: ['./takers.component.css']
})
export class TakersComponent {
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

constructor(private takers:TakersService,private pnotifyService: PnotifyService) { }

ngOnInit() {
$.getScript('assets/js/takers.js');
this.load();
}

load(){
this.takers.load().subscribe(data => {
this.results =(<any>data).data;
this.dtTrigger.next();
})
}

}
