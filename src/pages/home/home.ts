import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { task1 } from '../task1/task1';
import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   answer: string;
   answer2: Date;
   currentDate: Date;
   initialDate: Date;
   
   @ViewChild(TimerComponent) timer: TimerComponent;
   constructor(public alertCtrl: AlertController 
    , public navCtrl: NavController) { this.setInitDate();}
   
   
    public event = {
      month: '1990-02-19',
      timeStarts: '07:43',
      timeEnds: '2017-12-15'
    }

  //constructor(public navCtrl: NavController, alertCtrl: AlertController){ }
  setInitDate(){
    this.initialDate = new Date();
  }
  getInitDate(){
    return this.initialDate;
  }
getDiff(){
  return //this.getMyTime() - this.getInitDate;
}

  getMyTime(){
      this.currentDate = new Date();
      return this.currentDate;
}
  ngOnInit() {
    
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000);
  }
  
  
  
  presentAlert() {
    
    const alert = this.alertCtrl.create({
      title: 'Špatná odpověď',
      subTitle: 'Odpověděl jsi špatně',
      buttons: ['Zkusím znova']
    });
    alert.present();
  }
reallyHintAlert(){
  const alert = this.alertCtrl.create({
    title: 'Nápověda',
    subTitle: 'Máš možnost získat nápovědu, nicméně k času se ti přičtou 3 minuty, dobře si to rozmysli',
    buttons: ['Zobraz nápovědu','Zrušit' ]
  });
  alert.present();

}
  hintAlert

  goToOtherPage() {
  
  if ( this.event.timeEnds!=undefined ) {
    console.log("from date picker: " + this.event.timeEnds);
    console.log("from date picker: " + this.answer);
    if (this.event.timeEnds=="2017-08-02" ) {
    this.navCtrl.push(task1, {
      secondsRemaining: this.timer.getSecondsRemaining()}
            );
  } else {
    this.presentAlert();
    this.timer.pauseTimer();
    this.timer.timeInSeconds =this.timer.getSecondsRemaining()+60;
    this.timer.initTimer();
    this.timer.resumeTimer();
  
    
    
  }
  }

  }}