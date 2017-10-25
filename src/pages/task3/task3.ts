import { Task4Page } from "../task4/task4";
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
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
              public navParams: NavParams,
              public alertCtrl: AlertController)
   {
  this.resumeTime = this.navParams.get('secondsRemaining');
  }
  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }

  presentAlert() {
    
    const alert = this.alertCtrl.create({
      title: 'Špatná odpověď',
      subTitle: 'Odpověděl jsi špatně',
      buttons: ['Zkusím znova']
    });
    alert.present();
  }

  goToOtherPage() {
    if ( this.answer!=undefined ) {
      if (this.answer=="3" ) {
      this.navCtrl.push(Task4Page,{
        secondsRemaining: this.timer.getSecondsRemaining()}  );
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

