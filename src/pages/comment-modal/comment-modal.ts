import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the CommentModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comment-modal',
  templateUrl: 'comment-modal.html'
})
export class CommentModalPage {

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello CommentModalPage Page');
  }

  dismiss() {
      this.viewCtrl.dismiss();
    }

}
