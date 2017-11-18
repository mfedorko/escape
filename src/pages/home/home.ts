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
   hint1 : boolean;
   hint2 : boolean;

   
   @ViewChild(TimerComponent) timer: TimerComponent;
   constructor(public alertCtrl: AlertController 
    , public navCtrl: NavController) { this.setInitDate();}
   
   
    public event = {
      month: '1990-02-19',
      timeStarts: '07:43',
      timeEnds: '2017-01-01'
    }
   
    hintLevel1(){
return this.hint1;

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
    this.hint1=false;
    this.hint2=false;
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
    subTitle: 'Máš možnost získat nápovědu, nicméně k času se ti přičtou 3 minuty, dobře si to rozmysli.',
    buttons: ['Zrušit' ]});
    alert.addButton({
      text: 'Zobraz nápovědu',
      handler: data => {
        this.hint1 = true;
        this.timer.prolongTime(180);
      }
    });
  alert.present();

}
  

  goToOtherPage() {
  
  if ( this.event.timeEnds!=undefined ) {
    if (this.event.timeEnds=="2017-08-02" ) {
    this.navCtrl.push(task1, {
      secondsRemaining: this.timer.getSecondsRemaining()}
            );
  } else {
    this.presentAlert();
    this.timer.prolongTime(60);
  
    
    
  }
  }

  }}