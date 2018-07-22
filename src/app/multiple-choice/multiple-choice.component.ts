import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('assets/js/questions.js');
  }
}
