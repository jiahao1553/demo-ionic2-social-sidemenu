import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Shared } from '../../providers/shared';

@Component({
  selector: 'page-post-modal',
  templateUrl: 'post-modal.html'
})
export class PostModalPage {
  Areas: any = [];
  Area: string;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public Params: Shared) {
    this.Area = this.Params.Area;
    this.Areas = this.Params.AreaSet;
  }

  ionViewDidLoad() {
    console.log('Hello PostModalPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
