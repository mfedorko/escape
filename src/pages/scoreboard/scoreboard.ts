import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';




@IonicPage()
@Component({
  selector: 'page-scoreboard',
  templateUrl: 'scoreboard.html',
})
export class ScoreboardPage {
  players: any[] = [];
  arr : any[] = [];
  player: { name?: string, time?: string, timeUnf?:string, timestamp?: string } = {};
  currentPlayer: { name?: string, time?: string, timestamp?: string } = {};
  dataStorage: any;
  dataToSend: JSON;
  dataapi: any;
  dataKeys: any;
  dataString: string;
  newObject : object;
  @ViewChild(TimerComponent) timer: TimerComponent;



  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, ) {
    this.currentPlayer = this.navParams.get('player');
    this.player = {
      name: "testname",
      time: "testTime",
      timeUnf : "test",
      timestamp: "testTimestamp"
    };
    
   this.createStorage();
  //  this.deleteStorage();
  // this.deleteData();
   this.fetchData();
     
console.log(this.players);

  }
  ngOnInit() {
   
    
 
  
   
  
    
  }
  public createStorage() {

    this.http.post('https://api.apify.com/v2/key-value-stores?token=wRgs64jJ6QLATL34bFiR3T7im&name=vsefrovacka-test', undefined)
      .subscribe(
      data => this.dataStorage,
      err => this.handleError(err)
      );
      
  }
  public deleteStorage() {
    
        this.http.delete('https://api.apify.com/v2/key-value-stores?token=wRgs64jJ6QLATL34bFiR3T7im&name=vsefrovacka', undefined)
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
  public getKeysToDelete() {
    
        this.http.get('https://api.apify.com/v2/key-value-stores/hcaoAPzTxQAb8LNAX/keys').subscribe(
          data => this.handleDelete(data)
          ,
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

  private deleteValue(key){
 //  key=9;
    this.http.delete('https://api.apify.com/v2/key-value-stores/hcaoAPzTxQAb8LNAX/records/'+key).subscribe(
      data => this.handleDelete(data)
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

public deleteData (){
  console.log("fetching data has starterd")
  this.getKeysToDelete();
  
}
 

public fetchData (){
  console.log("fetching data has starterd")
  this.getKeys();
  

 

}

private handleDelete(data){
  
    this.dataKeys = data.json().data.items.length;
  
    for (var i=0; i<=this.dataKeys; i++) {
      this.deleteValue(i);
      
      setTimeout(1100);
    }
  }
private handleData(data){

  this.dataKeys = data.json().data.items.length;

  for (var i=0; i<=this.dataKeys; i++) {
    this.getValue(i);
  }
  //sort here
  this.players.sort(function(obj1, obj2) {
    // Ascending: first age less than the previous
    return obj1.timeUnf - obj2.timeUnf;
  });
}

private handleKeyData(data){
  var newPlayer = Object.create(this.player);
  this.dataString = data.json().toString();
  this.arr= this.dataString.split(",");
  
  newPlayer.name= data.json().name;
 var time=  data.json().time
 newPlayer.timeUnf=data.json().time;
 //(x - x % y) / y;
 var hours = (time - time%3600)/3600;
 time = time%3600;
 var minutes = (time - time%60)/60;
 var seconds = Math.round(time%60);
 newPlayer.time = hours +"h "+minutes+"min "+seconds+" s";

  var datum = new Date(data.json().timestamp)
  newPlayer.timestamp = datum.getDate() + "."+ (datum.getMonth()+1)+". "+datum.getFullYear();
  this.players.push(newPlayer);
  setTimeout(500);
  
  }
  private handleError(err) {
    console.log('something went wrong: ', err);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreboardPage');
  }





}
