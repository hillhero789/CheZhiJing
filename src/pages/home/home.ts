import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AdServiceProvider } from '../../providers/ad-service/ad-service';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  adPicSrcs: Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public adService: AdServiceProvider) {
    this.adPicSrcs = adService.getAdPicAddr();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
