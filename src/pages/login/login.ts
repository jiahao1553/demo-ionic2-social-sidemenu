import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { Shared } from '../../providers/shared';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public Param: Shared) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  goToFeed() {
    this.Param.PageTitle = 'Home';
    this.navCtrl.setRoot(FeedPage);
  }
}
