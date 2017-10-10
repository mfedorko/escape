import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { task1 } from '../task1/task1';
import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   answer: string;
   
   
   @ViewChild(TimerComponent) timer: TimerComponent;
  constructor(public navCtrl: NavController) {
    
  }
  
  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }
  goToOtherPage() {
  if ( this.answer!=undefined ) {
    if (this.answer.toUpperCase()=="ANSWER" ) {
    this.navCtrl.push(task1, this.timer.timeInSeconds);
  }
  }
}
}



