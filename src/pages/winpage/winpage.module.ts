import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WinPage } from './winpage';

@NgModule({
  declarations: [
    WinPage,
  ],
  imports: [
    IonicPageModule.forChild(WinPage),
  ],
})
export class WinpagePageModule {}
