import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Shared } from '../../providers/shared';

/*
  Generated class for the SearchModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-modal',
  templateUrl: 'search-modal.html'
})
export class SearchModalPage {
  Progress: string = "open";
  Areas: any = [];
  Area: string;
  StartDateUnix: number = 86400;
  SearchbyTopic: boolean = true;
  SearchbyUser: boolean = false;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public Param: Shared) {
    this.Area = this.Param.Area;
    this.Areas = this.Param.AreaSet;
  }

  ionViewDidLoad() {
    console.log('Hello SearchModalPage Page');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}
