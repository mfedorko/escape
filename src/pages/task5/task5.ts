import { WinPage } from "../winpage/winpage";
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
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
              public navParams: NavParams,
              public alertCtrl: AlertController)
   {  
  this.resumeTime = this.navParams.get('secondsRemaining');
  }
  presentAlert() {
    
    const alert = this.alertCtrl.create({
      title: 'Špatná odpověď',
      subTitle: 'Odpověděl jsi špatně',
      buttons: ['Zkusím znova']
    });
    alert.present();
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
        secondsRemaining: this.timer.getSecondsRemaining()} );
    }else {
      this.presentAlert();
      this.timer.timeInSeconds =this.timer.getSecondsRemaining()+60;
      console.log(this.timer.getSecondsRemaining()+60) ;
      this.timer.initTimer();
      console.log(this.timer.getSecondsRemaining()+60) ;
      this.timer.resumeTimer();   
      console.log(this.timer.getSecondsRemaining()+60) ;
    };
    }
    }
}

