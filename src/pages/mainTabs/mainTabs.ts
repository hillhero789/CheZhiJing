import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MainPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-mainTabs',
  templateUrl: 'mainTabs.html'
})
@IonicPage()
export class MainTabsPage {

  homePageRoot = 'HomePage'
  orderRoot = 'OrderPage'
  mineRoot = 'MinePage'


  constructor(public navCtrl: NavController) {}

}
