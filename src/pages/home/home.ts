import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { task1 } from '../task1/task1';
import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer';
import * as moment from 'moment';
import 'moment/locale/cs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   answer: string;
   currentDate: Date;
   initialDate: Date;
   
   
   @ViewChild(TimerComponent) timer: TimerComponent;
  constructor(public navCtrl: NavController) {
    
  }
  setInitDate(){
    this.initialDate = new Date();
  }
  getInitDate(){
    return this.initialDate;
  }
getDiff(){
  return //this.getMyTime() - this.getInitDate;
}

  getMyTime(){
      this.currentDate = new Date();
      return this.currentDate;
}
  ngOnInit() {
    @ViewChild(Mome) timer: TimerComponent;
    moment.locale('cs');
    console.log(moment.locale());
    console.log(this.getMyTime());
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000);
  }
  goToOtherPage() {
    console.log(this.timer.getSecondsRemaining());
    console.log(this.getDiff());
  if ( this.answer!=undefined ) {
    if (this.answer.toUpperCase()=="ANSWER" ) {
    this.navCtrl.push(task1, {
      secondsRemaining: this.timer.getSecondsRemaining()}
  
  
  
            );
  }
  }

  }}