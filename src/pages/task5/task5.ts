import { Task6Page } from "../task6/task6";
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
    public alertCtrl: AlertController) {
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

  reallySkipAlert() {
    const alert = this.alertCtrl.create({
      title: 'Přeskočit úkol',
      subTitle: 'Máš možnost přeskočit úkol, nicméně k času se ti přičte 15 minut, dobře si to rozmysli.',
      buttons: ['Zrušit']
    });
    alert.addButton({
      text: 'Přeskoč',
      handler: data => {
          this.navCtrl.push(Task6Page, {
            secondsRemaining: this.timer.getSecondsRemaining()+900
          });
      }
    });
    alert.present();

  }


  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }
  goToOtherPage() {

    this.navCtrl.push(Task6Page, {
      secondsRemaining: this.timer.getSecondsRemaining()
    });
  }
};



