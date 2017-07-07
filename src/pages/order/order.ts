import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  myDomSanitizer: DomSanitizer;
  mySafeHtml: SafeHtml;
  constructor(public navCtrl: NavController, public navParams: NavParams,public domSanitizer:DomSanitizer) {
    this.myDomSanitizer = domSanitizer;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
    this.mySafeHtml = this.myDomSanitizer.bypassSecurityTrustResourceUrl("javascript:testMap()");
  }

}
