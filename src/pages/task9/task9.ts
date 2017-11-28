import { Task10Page } from "../task10/task10";
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'page-task9',
  templateUrl: 'task9.html'
})
export class Task9Page {
  answer: string;
  resumeTime: string;
  hint1: boolean;
  hint2: boolean;
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




  reallyHintAlert() {
    const alert = this.alertCtrl.create({
      title: 'Nápověda',
      subTitle: 'Máš možnost získat nápovědu, nicméně k času se ti přičtou 3 minuty, dobře si to rozmysli',
      buttons: ['Zrušit']
    });
    alert.addButton({
      text: 'Zobraz nápovědu',
      handler: data => {
        if (!this.hint1) {
          this.timer.prolongTime(180);
        }
        this.hint1 = true;

      }
    });
    alert.present();

  }

  ngOnInit() {
    this.hint1 = false;
    this.hint2 = false;
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }
  hintLevel1() {
    return this.hint1;

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
          this.navCtrl.push(Task10Page, {
            secondsRemaining: this.timer.getSecondsRemaining()+900
          });
      }
    });
    alert.present();

  }

  goToOtherPage() {
    console.log(this.answer);
    if (this.answer != undefined) {
      if (this.answer.toUpperCase() == "LUBOŠ MAREK") {
        this.navCtrl.push(Task10Page, {
          secondsRemaining: this.timer.getSecondsRemaining()
        }
        );
      } else {
        this.presentAlert();
        this.timer.prolongTime(60);

      };
    }
  }
}

