import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the ReviewModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-review-modal',
  templateUrl: 'review-modal.html'
})
export class ReviewModalPage {
  @ViewChild(Content) content: Content;

    BenefitCategory: string;
    Vacants: any = [];
    TeamMembers: any = [];
    Count: number;

    ImageBeforeVisibility: boolean;
    ImageAfterVisibility: boolean;

    SoftSaving: number;
    HardSaving: number;

    constructor(
      public navCtrl: NavController,
      public viewCtrl: ViewController)
      {
        this.ImageBeforeVisibility= false;
        this.ImageAfterVisibility = false;
        this.Count=0;
        this.Vacants=[{id: this.Count, value: 'Team Member 1'}];
        this.BenefitCategory="qs";
    }

  ionViewDidLoad() {
    console.log('Hello ReviewModalPage Page');
  }

  increaseArray(){
    this.Count++;
    this.Vacants.push({ id: this.Count, value: 'Team Member '+(this.Count+1)});
  }

  decreaseArray(){
    this.Count--;
    this.Vacants.pop();
  }

toggleImageBefore(){
  this.ImageBeforeVisibility=!this.ImageBeforeVisibility;
  this.content.resize();
}

toggleImageAfter(){
  this.ImageAfterVisibility=!this.ImageAfterVisibility;
  this.content.resize();
}

dismiss() {
  this.navCtrl.popTo(this.navCtrl.getByIndex(1));
  //this.navCtrl.pop(); 2 times also can
}

}
