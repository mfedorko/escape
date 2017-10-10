import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
 
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
 
}