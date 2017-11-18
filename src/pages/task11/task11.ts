import { TabProfilePage } from "../tab-profile/tab-profile";
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'page-task11',
  templateUrl: 'task11.html'
})
export class Task11Page {
  answer: string;
  resumeTime: string;
  hint1: boolean;
  hint2: boolean;
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


    
    
      reallyHintAlert() {
        const alert = this.alertCtrl.create({
          title: 'Nápověda',
          subTitle: 'Máš možnost získat nápovědu, nicméně k času se ti přičtou 3 minuty, dobře si to rozmysli',
          buttons: ['Zrušit']
        });
        alert.addButton({
          text: 'Zobraz nápovědu',
          handler: data => {
            this.hint1 = true;
            this.timer.prolongTime(180);
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
    console.log(this.answer);
    if ( this.answer!=undefined ) {
      if (this.answer.toUpperCase()=="ODPOVĚĎ" ) {
      this.navCtrl.push(TabProfilePage,{
        secondsRemaining: this.timer.getSecondsRemaining()}
);
    }else {
      this.presentAlert();
      this.timer.prolongTime(60);
      
    };
    }
    }
}

