import { Task3Page } from "../task3/task3";
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'page-task2',
  templateUrl: 'task2.html'
})
export class Task2Page {
  answer: string;
  resumeTime: string;
  @ViewChild(TimerComponent) timer: TimerComponent;
  constructor(public navCtrl: NavController,
              public navParams: NavParams)
   {
  this.resumeTime = this.navParams.get('secondsRemaining');
  }
  
  ngOnInit() {
    setTimeout(() => {
      this.timer.resumeTimer();
    }, 1000)
  }
  goToOtherPage() {
    if ( this.answer!=undefined ) {
      if (this.answer.toUpperCase()=="BARBORA" ) {
      this.navCtrl.push(Task3Page,{
        secondsRemaining: this.timer.getSecondsRemaining()});
    }else {
      this.presentAlert();
      this.timer.timeInSeconds =this.timer.getSecondsRemaining()+60;
      this.timer.initTimer();
      this.timer.resumeTimer();
      
    };
    }
    }
}

