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
  user1: {age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, hobbies?: string, sibblings?: string} = {};
  user2: {age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, hobbies?: string, sibblings?: string} = {};
  user3: {age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, hobbies?: string, sibblings?: string} = {};
  user4: {age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, hobbies?: string, sibblings?: string} = {};
  user5: {age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, hobbies?: string, sibblings?: string} = {};
  user6: {age?: string, nationality?: string, photoURL?: string, zodiacsign?: string, drink?: string, faculty?: string, hobbies?: string, sibblings?: string} = {};
  
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
  this.user1={  photoURL    :'assets/img/user1.png',
                age         : "22",
                nationality : "dánská",
                zodiacsign  : "beran",
                drink       : "vodka",
                faculty     : "FIS",
                hobbies     : "idk",
                sibblings   : "0"
};  

this.user2={  photoURL    :'assets/img/user2.png',
age         : "23",
nationality : "sv",
zodiacsign  : "bervvvvan",
drink       : "vodvvvvka",
faculty     : "FIvvS",
hobbies     : "vvidk",
sibblings   : "0222"
};

this.user3={  photoURL    :'assets/img/user3.png',
age         : "24",
nationality : "svaa",
zodiacsign  : "bervavvvan",
drink       : "vodvaaavvvka",
faculty     : "FIvvaaS",
hobbies     : "vviaadk",
sibblings   : "022aa2"
};

this.user4={  photoURL    :'assets/img/user4.png',
age         : "24",
nationality : "svaa",
zodiacsign  : "bervvvaassvan",
drink       : "vodvvvvsdsdska",
faculty     : "FIvvddS",
hobbies     : "vvidddk",
sibblings   : "022dd2"
};

this.user5={  photoURL    :'assets/img/user5.png',
age         : "25",
nationality : "sssdv",
zodiacsign  : "bervvdssfvvan",
drink       : "vodvfsffsffssvvvka",
faculty     : "FIvffssvS",
hobbies     : "vvisffdk",
sibblings   : "02sfffs22"
};


this.user6={  photoURL    :'assets/img/user6.png',
age         : "26",
nationality : "sasav",
zodiacsign  : "bervvsaasasvvan",
drink       : "vodvvvsasasasassavka",
faculty     : "FIvvsasasasS",
hobbies     : "vvisaasassdk",
sibblings   : "022sasass2"
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
