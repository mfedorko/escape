import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { task1 } from '../pages/task1/task1';
import { IntroPage } from '../pages/intro/intro';
import { Task2Page } from "../pages/task2/task2";
import { Task3Page } from "../pages/task3/task3";
import { Task4Page } from "../pages/task4/task4";
import { Task5Page } from "../pages/task5/task5";
import { Task6Page } from "../pages/task6/task6";
import { Task7Page } from "../pages/task7/task7";
import { Task8Page } from "../pages/task8/task8";
import { Task9Page } from "../pages/task9/task9";
import { Task10Page } from "../pages/task10/task10";
import { Task11Page } from "../pages/task11/task11";
import { WinPage } from "../pages/winpage/winpage";
import { TimerComponent } from '../pages/timer/timer';
import { NativeAudio } from '@ionic-native/native-audio';
import { TabProfilePage } from "../pages/tab-profile/tab-profile";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    task1,
    IntroPage,
    Task2Page,
    Task3Page,
    Task4Page,
    Task5Page,
    Task6Page,
    Task7Page,
    Task8Page,
    Task9Page,
    Task10Page,
    Task11Page,
    WinPage,
    TimerComponent,
    TabProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    task1,
    IntroPage,
    Task2Page,
    Task3Page,
    Task4Page,
    Task5Page,
    Task6Page,
    WinPage,
    TimerComponent,
    TabProfilePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }