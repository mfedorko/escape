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
  testRadioOpen: boolean;
  testRadioResult;
  hint1: boolean;
  hint2: boolean;
  @ViewChild(TimerComponent) timer: TimerComponent;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public nativeAudio: NativeAudio) {
    this.resumeTime = this.navParams.get('secondsRemaining');
  }
  prolongTime(time) {

    this.timer.pauseTimer();
    this.timer.timeInSeconds = this.timer.getSecondsRemaining() + time;
    this.timer.initTimer();
    this.timer.resumeTimer();
  }


  reallyHintAlert() {
    const alert = this.alertCtrl.create({
      title: 'Nápověda',
      subTitle: 'Máš možnost získat nápovědu, nicméně k času se ti přičtou 3 minuty, dobře si to rozmysli',
      buttons: ['Zrušit']
    });
    alert.addButton({
      text: 'Zobraz napovedu',
      handler: data => {
        this.hint1 = true;
        this.prolongTime(180);
      }
    });
    alert.present();

  }


  hintLevel1() {
    return this.hint1;

  }


  ngOnInit() {
    this.hint1 = false;
    this.hint2 = false;
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

  playMusic() {
    this.nativeAudio.play('song1');
    console.log("song playeed");

  }
  pauseMusic() {
    this.nativeAudio.stop('song1')
  }

  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Číšlo fakulty:');

    alert.addInput({
      type: 'radio',
      label: '1',
      value: '1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '2',
      value: '2'
    });

    alert.addInput({
      type: 'radio',
      label: '3',
      value: '3'
    });

    alert.addInput({
      type: 'radio',
      label: '4',
      value: '4'
    });

    alert.addInput({
      type: 'radio',
      label: '5',
      value: 'purple'
    });



    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }


  goToOtherPage() {
    if (this.testRadioResult != undefined) {
      if (this.testRadioResult == "4") {
        this.pauseMusic();
        this.navCtrl.push(Task4Page, {
          secondsRemaining: this.timer.getSecondsRemaining()
        });
      } else {
        this.presentAlert();
        this.prolongTime(60);

      }
    }
  }
}