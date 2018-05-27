import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }
  // This will be loaded only once
  ionViewDidLoad() {
    console.log('ionViewDidLoad - fired once upon page load');
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter - fired just as the page is about to become active');
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter - fired each time when we enter');
  }
  ionViewWillLeave(){
    console.log('ionViewWillLeave - fired each time when the page is abou to leave');
  }
  ionViewDidLeave(){
    console.log('ionViewDidLeave - fired when user has left that page');
  }
  ionViewWillUpdate(){
    console.log('ionViewWillUpdate - ran when the page is about to be destroyed');
  }
  navigateToAbout() : void{
    this.navCtrl.push('AboutPage',{
      message : 'Hello from home page!'
    })
  }

}
