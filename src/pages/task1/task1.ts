import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Task2Page } from "../task2/task2";
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'page-task1',
  templateUrl: 'task1.html'
})
export class task1 {
  answer1: string;
  answer2: string;
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
  public event = {
    month: '1990-02-19',
    timeStarts: '07:15',
    timeEnds: '07:15'
  }
  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }
  goToOtherPage() {
    console.log( this.event.timeStarts );
    console.log( this.event.timeEnds );

    if ( this.event.timeStarts!=undefined && this.event.timeEnds!=undefined ) {
      
      if (this.event.timeStarts=='07:23' && this.event.timeEnds=='07:28'  ) {
      this.navCtrl.push(Task2Page,{
        secondsRemaining: this.timer.getSecondsRemaining()}   );
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


