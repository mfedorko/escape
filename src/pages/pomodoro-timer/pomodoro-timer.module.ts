import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PomodoroTimerPage } from './pomodoro-timer';

@NgModule({
  declarations: [
    PomodoroTimerPage,
  ],
  imports: [
    IonicPageModule.forChild(PomodoroTimerPage),
  ],
})
export class PomodoroTimerPageModule {}
