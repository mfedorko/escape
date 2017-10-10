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
import { WinPage } from "../pages/winpage/winpage";
import { TimerComponent } from '../pages/timer/timer';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    task1,
    IntroPage,
    Task2Page,
    WinPage,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    task1,
    IntroPage,
    Task2Page,
    WinPage,
    TimerComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}