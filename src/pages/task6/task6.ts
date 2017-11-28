import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Task7Page } from "../task7/task7";
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'page-task6',
  templateUrl: 'task6.html'
})
export class Task6Page {
  answer1: string;
  answer2: string;
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
  public event = {
    month: '1990-02-19',
    timeStarts: '07:15',
    timeEnds: '07:15'
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
          this.navCtrl.push(Task7Page, {
            secondsRemaining: this.timer.getSecondsRemaining()+900
          });
      }
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
        if (!this.hint1 ) {
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

  goToOtherPage() {


    if (this.event.timeStarts != undefined && this.event.timeEnds != undefined) {

      if (this.event.timeStarts == '07:08') {
        this.navCtrl.push(Task7Page, {
          secondsRemaining: this.timer.getSecondsRemaining()
        });
      } else {
        this.presentAlert();
        this.timer.prolongTime(60);

      };
    }
  }

}


