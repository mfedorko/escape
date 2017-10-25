import { Task3Page } from "../task3/task3";
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
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
      this.timer.startTimer();
    }, 1000)
  }
  goToOtherPage() {
    if ( this.answer!=undefined ) {
      if (this.answer.toUpperCase()=="BARBORA" ) {
      this.navCtrl.push(Task3Page,{
        secondsRemaining: this.timer.getSecondsRemaining()});
    }else {
      this.presentAlert();
      this.timer.pauseTimer();
      this.timer.timeInSeconds =this.timer.getSecondsRemaining()+60;
      this.timer.initTimer();
      this.timer.resumeTimer();
      
    };
    }
    }
}

