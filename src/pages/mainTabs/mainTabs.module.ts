import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainTabsPage } from './mainTabs';

@NgModule({
  declarations: [
    MainTabsPage
  ],
  imports: [
    IonicPageModule.forChild(MainTabsPage),
  ]
})
export class MainTabsPageModule {}
