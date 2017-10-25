import { WinPage } from "../winpage/winpage";
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'page-task4',
  templateUrl: 'task4.html'
})
export class Task4Page {
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
    console.log(this.answer);
    if ( this.answer!=undefined ) {
      if (this.answer.toUpperCase()=="SKLAD" ) {
      this.navCtrl.push(WinPage,{
        secondsRemaining: this.timer.getSecondsRemaining()}
    
    
    
              );
    };
    }
    }
}

