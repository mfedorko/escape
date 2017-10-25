import { WinPage } from "../winpage/winpage";
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'page-task5',
  templateUrl: 'task5.html'
})
export class Task5Page {
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
      if (this.answer.toUpperCase()=="ANSWER3" ) {
      this.navCtrl.push(WinPage,{
        secondsRemaining: this.timer.getSecondsRemaining()}
    
    
    
              );
    };
    }
    }
}

