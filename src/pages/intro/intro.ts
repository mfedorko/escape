import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { TabProfilePage } from "../tab-profile/tab-profile";
import { Task5Page } from "../task5/task5";
 
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

goToTask5(){
  this.navCtrl.setRoot(Task5Page);
}

  goToTab(){
    this.navCtrl.setRoot(TabProfilePage);
  }
}