import { Task4Page } from "../task4/task4";
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'page-task3',
  templateUrl: 'task3.html'
})
export class Task3Page {
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
      if (this.answer=="3" ) {
      this.navCtrl.push(Task4Page,{
        secondsRemaining: this.timer.getSecondsRemaining()}
    
    
    
              );
    };
    }
    }
}

