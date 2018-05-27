import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  message : string ;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.message = this.navParams.get('message');
    console.log(this.message);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  navigateBack() : void{
    this.navCtrl.pop();
  }
  navigateToThirdPage() : void{
    this.navCtrl.push('SecondPage');
  }

}
