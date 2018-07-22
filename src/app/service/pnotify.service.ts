import { Injectable } from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import PNotifyConfirm from "pnotify/dist/es/PNotifyConfirm";
@Injectable()
export class PnotifyService {

  constructor() { }
  getPNotify() {
    PNotifyButtons;
    PNotifyConfirm; // Initiate the module. Important!
    return PNotify;
  }

}
