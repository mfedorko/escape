import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Task2Page } from "../task2/task2";
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'page-task1',
  templateUrl: 'task1.html'
})
export class task1 {
  answer: string;
  resumeTime: string;
  @ViewChild(TimerComponent) timer: TimerComponent;
  constructor(public navCtrl: NavController,
              public navParams: NavParams)
   {
    
  this.resumeTime = this.navParams.get('secondsRemaining');
console.log(this.resumeTime); 


  }
  ngOnInit() {
    setTimeout(() => {
      this.timer.resumeTimer();
    }, 1000)
  }
  goToOtherPage() {
    if ( this.answer!=undefined ) {
      if (this.answer.toUpperCase()=="ANSWER2" ) {
      this.navCtrl.push(Task2Page);
    }
    }

  }
}

