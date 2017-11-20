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




  reallyHintAlert() {
    const alert = this.alertCtrl.create({
      title: 'Nápověda',
      subTitle: 'Máš možnost získat nápovědu, nicméně k času se ti přičtou 3 minuty, dobře si to rozmysli',
      buttons: ['Zrušit']
    });
    alert.addButton({
      text: 'Zobraz nápovědu',
      handler: data => {
        if (!this.hint1)  {
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
  hintLevel1(){
    return this.hint1;
    
        }
    
  goToOtherPage() {

    if (this.event.timeStarts != undefined && this.event.timeEnds != undefined) {

      if (this.event.timeStarts == '07:23' && this.event.timeEnds == '07:28') {
        this.navCtrl.push(Task2Page, {
          secondsRemaining: this.timer.getSecondsRemaining()
        });
      } else {
        this.presentAlert();
        this.timer.prolongTime(60);

      };
    }
  }

}


