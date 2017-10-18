import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';

/**
 * Generated class for the WinpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-winpage',
  templateUrl: 'winpage.html',
})
export class WinPage {
  answer: string;
  resumeTime: string;
  @ViewChild(TimerComponent) timer: TimerComponent;
  constructor(public navCtrl: NavController,
              public navParams: NavParams)
   {
    
  this.resumeTime = this.navParams.get('secondsRemaining');
console.log(this.resumeTime); 
console.log(this.timer);
//this.timer.setRunTimer(false);
  }
  ngOnInit() {
    setTimeout(() => {
      this.timer.resumeTimer();
      this.timer.setRunTimer(false);
      console.log(this.timer);
    }, 1000)
    
  }
  
    }
    
  


