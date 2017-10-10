import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WinPage } from "../winpage/winpage";

@Component({
  selector: 'page-task2',
  templateUrl: 'task2.html'
})
export class Task2Page {
  answer: string;
  constructor(public navCtrl: NavController) {

  }
  goToOtherPage() {
    if ( this.answer!=undefined ) {
      if (this.answer.toUpperCase()=="ANSWER3" ) {
      this.navCtrl.push(WinPage);
    }
    }

  }
}

