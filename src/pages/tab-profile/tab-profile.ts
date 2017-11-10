import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
import { WinPage } from "../winpage/winpage";
/*import { AuthProvider } from '../../providers/auth/auth';*/

@IonicPage()
@Component({
  selector: 'page-tab-profile',
  templateUrl: 'tab-profile.html',
})
export class TabProfilePage {
  user: {displayName?: string, email?: string, photoURL?: string} = {};
  answer: string;
  resumeTime: string;
 

  ionViewDidLoad() {
   
 
  }

  changeProfile() {
    
  }
  @ViewChild(TimerComponent) timer: TimerComponent;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController)
   {
    this.user.photoURL = 'assets/img/noavatar.png';  
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

  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }
  goToOtherPage(id) {
    this.answer=id;
    console.log(this.answer);
    if ( this.answer!=undefined ) {
      if (this.answer=="1" ) {
      this.navCtrl.push(WinPage,{
        secondsRemaining: this.timer.getSecondsRemaining()}
);
    }else {
      this.presentAlert();
      this.timer.prolongTime(60);
      
    };
    }
    }
}
