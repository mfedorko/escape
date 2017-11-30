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
  user1: { age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, name?: string, sibblings?: string } = {};
  user2: { age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, name?: string, sibblings?: string } = {};
  user3: { age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, name?: string, sibblings?: string } = {};
  user4: { age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, name?: string, sibblings?: string } = {};
  user5: { age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, name?: string, sibblings?: string } = {};
  user6: { age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, name?: string, sibblings?: string } = {};

  answer: string;
  resumeTime: string;


  ionViewDidLoad() {


  }

  changeProfile() {

  }
  @ViewChild(TimerComponent) timer: TimerComponent;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.user1 = {
      photoURL: 'assets/img/user1.png',
      age: "23",
      nationality: "Irsko",
      zodiacsign: "Lev",
      drink: "Martini",
      faculty: "Aplikované statistické metody",
      name: "Lonán Moore",
      sibblings: "4 bratři, 1 sestra"
    };

    this.user2 = {
      photoURL: 'assets/img/user2.png',
      age: "25",
      nationality: "Velká Británie",
      zodiacsign: "Lev",
      drink: "Whiskey",
      faculty: "Umělá inteligence",
      name: "Lance McRae",
      sibblings: "4 sestry, 1 bratr"
    };

    this.user3 = {
      photoURL: 'assets/img/user3.png',
      age: "24",
      nationality: "Belgie",
      zodiacsign: "Lev",
      drink: "GuldenDraak",
      faculty: "Cestovní ruch",
      name: "Lubos Milligan",
      sibblings: "4 bratři, 1 sestra"
    };

    this.user4 = {
      photoURL: 'assets/img/user4.png',
      age: "19",
      nationality: "Skotsko",
      zodiacsign: "Lev",
      drink: "Rum",
      faculty: "Business Inteligence",
      name: "Lamont Meaney",
      sibblings: "4 sestry, 1 bratr"
    };

    this.user5 = {
      photoURL: 'assets/img/user5.png',
      age: "26",
      nationality: "Irsko",
      zodiacsign: "Lev",
      drink: "Martini",
      faculty: "Diplomacie",
      name: "Langfort Mctaggart",
      sibblings: "4 bratři, 1 sestra"
    };


    this.user6 = {
      photoURL: 'assets/img/user6.png',
      age: "26",
      nationality: "Francie",
      zodiacsign: "Panna",
      drink: "víno",
      faculty: "Rekreologie",
      name: "Luboslava Nováková",
      sibblings: "5 bratrů"
    };

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
      console.log("Alive!");
    }, 1000)
  }
  goToOtherPage(id) {
    this.answer = id;
    console.log(this.answer);
    if (this.answer != undefined) {
      if (this.answer == "1") {
        this.navCtrl.push(WinPage, {
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
