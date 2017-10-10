import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from "../pages/home/home";
import { IntroPage } from "../pages/intro/intro";
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  rootPage: any = HomePage;
  loader: any;
 
  constructor(public platform: Platform, public loadingCtrl: LoadingController, public storage: Storage) {
 
    this.presentLoading();
 
    this.platform.ready().then(() => {
 
      this.storage.get('introShown').then((result) => {
 
        if(result){
          this.rootPage = IntroPage;
        } else {
          this.rootPage = IntroPage;
          this.storage.set('introShown', true);
        }
 
        this.loader.dismiss();
 
      });
 
    });
 
  }
 
  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
 
    this.loader.present();
 
  }
 
}