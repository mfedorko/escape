import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { TabProfilePage } from "../tab-profile/tab-profile";
 
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
 
  constructor(public navCtrl: NavController) {
 
  }
 
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }
 

  goToTab(){
    this.navCtrl.setRoot(TabProfilePage);
  }
}