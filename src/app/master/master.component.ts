import { Component} from '@angular/core';
import { ApiService } from '../service/api.service';
declare var $: any;
@Component({
selector: 'app-master',
templateUrl: './master.component.html',
styleUrls: ['./master.component.css']
})
export class MasterComponent {

constructor(private api: ApiService) {
}
ngOnInit() {
// this.api.checktoken();
$.getScript('assets/js/app.js');
}
}
