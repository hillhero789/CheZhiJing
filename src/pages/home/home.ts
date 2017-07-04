import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as AV  from 'leancloud-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    var APP_ID = 'jFJHb5ixb7XLc2tXMH5NfQuT-gzGzoHsz';
    var APP_KEY = 'Ys2e9epw49uvfXKaUoGFyy0m';

    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });

    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    testObject.save({
      words: 'Hello World!'
    }).then(function (object) {
      console.log('rocks!')
    })
  }

}
