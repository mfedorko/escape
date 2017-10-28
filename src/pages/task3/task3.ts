import { Task4Page } from "../task4/task4";
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
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
              public alertCtrl: AlertController,
              public nativeAudio: NativeAudio)
   {
  this.resumeTime = this.navParams.get('secondsRemaining');
  }
  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000);
    this.nativeAudio.preloadComplex('song1', 'sound/sound.mp3', 1, 1, 0);
  }

  presentAlert() {
    
    const alert = this.alertCtrl.create({
      title: 'Špatná odpověď',
      subTitle: 'Odpověděl jsi špatně',
      buttons: ['Zkusím znova']
    });
    alert.present();
  }

playMusic(){
  this.nativeAudio.play('song1');
  console.log("song playeed");
  
}
pauseMusic(){
  this.nativeAudio.stop('song1')
}
  

  goToOtherPage() {
    if ( this.answer!=undefined ) {
      if (this.answer=="4" ) {
        this.pauseMusic();
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

