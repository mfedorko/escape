import { TabProfilePage } from "../tab-profile/tab-profile";
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';
import { ViewChild } from '@angular/core';
import * as papa from 'papaparse';
import { Http } from '@angular/http';
import { File } from '@ionic-native/file';





@Component({
  selector: 'page-task11',
  templateUrl: 'task11.html'
})
export class Task11Page {
  answer: string;
  resumeTime: string;
  hint1: boolean;
  hint2: boolean;
  persons: Array<any>;
  dataId: string;
  csvData: any[] = [];
  headerRow: any[] = [];
  data: any[] = [];
  data1 =  ["new name1","new time1","timestamp1"];
 dataapi: JSON;
 dataToSend : JSON;

  @ViewChild(TimerComponent) timer: TimerComponent;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private http: Http,
              private file: File
            )
   {
    
      this.readCsvData();
      
  this.resumeTime = this.navParams.get('secondsRemaining');
  }

 
  private readCsvData() {
    this.http.get('assets/vsefrovacka_db.csv')
      .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
      );
  }
public createStorage() {

  this.http.post('https://api.apify.com/v2/key-value-stores?token=wRgs64jJ6QLATL34bFiR3T7im&name=vsefrovacka',undefined)
  .subscribe(
    data => this.dataapi,
    err => this.handleError(err)
    );
}

public postData(data: JSON, key: string){
  this.http.put('https://api.apify.com/v2/key-value-stores/hcaoAPzTxQAb8LNAX/records/'+key,data)
  .subscribe(
    data => this.dataapi,
    err => this.handleError(err)
    );

}


  public getData(){
   
    this.http.get('https://api.apify.com/v2/key-value-stores?token=wRgs64jJ6QLATL34bFiR3T7im')
    .subscribe(
    data => this.dataapi,
    err => this.handleError(err)
    );
  }

  public extractData(res) {
    let csvData = res['_body'] || '';
    let parsedData = papa.parse(csvData).data;
 
    this.headerRow = parsedData[0];
 
    parsedData.splice(0, 1);
    this.csvData = parsedData;
    this.data = this.csvData;
    console.log(this.csvData);
   
  }
public prepareData(){
  
//console.log(this.csvData.push(this.data1));  
//console.log(this.csvData);
console.log(this.dataToSend= JSON.parse(JSON.stringify(this.data1)));


}
public writeToFile (){
  let csv = papa.unparse({
    fields: this.headerRow,
    data: this.csvData
  });
  //console.log(csv);
  //console.log(this.file.createFile('filesystem:'+this.file.dataDirectory+'/persistent/assets/vsefrovacka_db.csv',csv,true));
  //console.log(this.file.applicationDirectory);
  this.http.post('https://api.apify.com/v2/key-value-stores?token=wRgs64jJ6QLATL34bFiR3T7im&name=vsefrovacka-db',this.data)
  console.log(this.http.post('https://api.apify.com/v2/key-value-stores?token=wRgs64jJ6QLATL34bFiR3T7im&name=vsefrovacka-db',this.data));
  console.log(this.data);
}
  private handleError(err) {
    console.log('something went wrong: ', err);
  }
 
  trackByFn(index: any, item: any) {
    return index;
  }
  presentAlert() {
    
    const alert = this.alertCtrl.create({
      title: 'Špatná odpověď',
      subTitle: 'Odpověděl jsi špatně',
      buttons: ['Zkusím znova']
    });
    alert.present();
  }

  

    
      reallyHintAlert() {
        const alert = this.alertCtrl.create({
          title: 'Nápověda',
          subTitle: 'Máš možnost získat nápovědu, nicméně k času se ti přičtou 3 minuty, dobře si to rozmysli',
          buttons: ['Zrušit']
        });
        alert.addButton({
          text: 'Zobraz nápovědu',
          handler: data => {
            this.hint1 = true;
            this.timer.prolongTime(180);
          }
        });
        alert.present();
    
      }
    
      ngOnInit() {
        this.hint1 = false;
        this.hint2 = false;
        this.getData();
        console.log(this.dataapi);
 
        setTimeout(() => {
          this.timer.startTimer();
        }, 1000)
      }
      hintLevel1() {
        return this.hint1;
    
      }
    
    
  goToOtherPage() {
    console.log(this.answer);
    if ( this.answer!=undefined ) {
      if (this.answer.toUpperCase()=="ODPOVĚĎ" ) {
      this.navCtrl.push(TabProfilePage,{
        secondsRemaining: this.timer.getSecondsRemaining()}
);
    }else {
      this.presentAlert();
      this.timer.prolongTime(60);
      
    };
    }
    }
}

