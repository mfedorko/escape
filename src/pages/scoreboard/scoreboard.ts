import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


/**
 * Generated class for the ScoreboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scoreboard',
  templateUrl: 'scoreboard.html',
})
export class ScoreboardPage {
  players: any[] = [];
  arr : any[] = [];
  player: { name?: string, time?: string, timestamp?: string } = {};
  dataStorage: any;
  dataToSend: JSON;
  dataapi: any;
  dataKeys: any;
  dataString: string;
  @ViewChild(TimerComponent) timer: TimerComponent;



  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, ) {
    this.player = {
      name: "testname",
      time: "testTime",
      timestamp: "testTimestamp"
    };
    this.createStorage();
    
   this.fetchData();
     


  }
  ngOnInit() {
   
    
 
  
   
  
    
  }
  public createStorage() {

    this.http.post('https://api.apify.com/v2/key-value-stores?token=wRgs64jJ6QLATL34bFiR3T7im&name=vsefrovacka', undefined)
      .subscribe(
      data => this.dataStorage,
      err => this.handleError(err)
      );
      
  }

  public postData(data: JSON, key: string) {
    this.http.put('https://api.apify.com/v2/key-value-stores/hcaoAPzTxQAb8LNAX/records/' + key, data)
      .subscribe(
      data => this.dataapi,
      err => this.handleError(err)
      );

  }


  public getKeys() {

    this.http.get('https://api.apify.com/v2/key-value-stores/hcaoAPzTxQAb8LNAX/keys').subscribe(
      data => this.handleData(data)
      ,
      err => this.handleError(err)
      );
  }

private getValue(key){
  this.http.get('https://api.apify.com/v2/key-value-stores/hcaoAPzTxQAb8LNAX/records/'+key).subscribe(
    data => this.handleKeyData(data)
    ,
    err => this.handleError(err)
    );

}

public fetchData (){
  console.log("fetching data has starterd")
  this.getKeys();
  
  console.log(this.players);
 

}

private handleData(data){

  this.dataKeys = data.json().data.items.length;
  console.log(this.dataKeys+" this was a datakey");
  for (var i=1; i<=this.dataKeys; i++) {
    this.getValue(i);
  }
}

private handleKeyData(data){
  this.dataString = data.json().toString();
  this.arr= this.dataString.split(",");
  this.player.name= this.arr[0];
  this.player.time = this.arr[1];
  this.player.timestamp = this.arr[2];
    this.players.push(this.player)
    console.log(data.json()+" this was a datakey in key data");
    console.log(this.player);
  }
  private handleError(err) {
    console.log('something went wrong: ', err);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreboardPage');
  }





}
