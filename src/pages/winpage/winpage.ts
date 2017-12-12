import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import {ScoreboardPage} from '../scoreboard/scoreboard';

/**
 * Generated class for the WinpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-winpage',
  templateUrl: 'winpage.html',
})
export class WinPage {
  answer: string;
  resumeTime: string;
  dataapi: any;
  numOfPlayers: number;
  newKey : string;
  player: { name?: string, time?: string, timestamp?: string } = {};
  @ViewChild(TimerComponent) timer: TimerComponent;
  constructor(public navCtrl: NavController,
    public navParams: NavParams, private http: Http, public alertCtrl: AlertController) {

    this.resumeTime = this.navParams.get('secondsRemaining');
    this.getKeys();
    //this.timer.setRunTimer(false);
  }


  public getKeys() {
    
        this.http.get('https://api.apify.com/v2/key-value-stores/hcaoAPzTxQAb8LNAX/keys').subscribe(
          data => this.handleData(data)
          ,
          err => this.handleError(err)
          );
      }
    
      
    private handleData(data){
    
      this.numOfPlayers = data.json().data.items.length;
      console.log(this.numOfPlayers+" this was a datakey");
    }
    


  public postData(data: JSON, key: string) {
    this.http.put('https://api.apify.com/v2/key-value-stores/hcaoAPzTxQAb8LNAX/records/' + key, data)
      .subscribe(
      data => this.dataapi,
      err => this.handleError(err)
      );
      this.navCtrl.push(ScoreboardPage, {
        player: this.player
      });
      console.log(data);

  }
  addNameAlert() {
    const alert = this.alertCtrl.create({
      title: 'Zadat jméno hráče',
      subTitle: 'Zadej své jméno a uvidíš se v tabulce vítězů',
      buttons: ['Zrušit'],
      inputs: [
        {
          name: 'name',
          placeholder: 'Jméno'
        },

      ]
    });
    alert.addButton({
      text: 'Zadat',
      handler: data => {
          this.player.name = data.name;
          console.log("player name:"+this.player.name);
          this.postData(JSON.parse(JSON.stringify(this.player)),this.newKey);
          this.navCtrl.push(ScoreboardPage, {
            player: this.player
          });
      }
    });

    alert.present();

  }
  private handleError(err) {
    console.log('something went wrong: ', err);
  }
  ngOnInit() {
    setTimeout(() => {
      this.getKeys();
      this.timer.resumeTimer();
      this.timer.setRunTimer(false);
      this.player.time = this.resumeTime;
      this.player.timestamp = new Date().toJSON();
      this.numOfPlayers+=1;
      this.newKey = this.numOfPlayers.toString();
     
    }, 1000)

  }

}




