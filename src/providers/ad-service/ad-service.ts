import { Injectable } from '@angular/core';

/*
  Generated class for the AdServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AdServiceProvider {

  constructor() {
    console.log('AdServiceProvider');
  }
  getAdPicAddr():any{
    return ["../../assets/pic/ad1.jpg", "../../assets/pic/ad2.jpg", "../../assets/pic/ad3.jpg","../../assets/pic/ad4.jpg"];
  }
}
