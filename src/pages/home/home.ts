import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { task1 } from '../task1/task1';
import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   answer: string;
   currentDate: Date;
   initialDate: Date;
  
   
   
   @ViewChild(TimerComponent) timer: TimerComponent;
   constructor(public alertCtrl: AlertController 
    , public navCtrl: NavController) { }
   
   
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
  goToOtherPage() {
  
  if ( this.answer!=undefined ) {
    if (this.answer.toUpperCase()=="2.8." ) {
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