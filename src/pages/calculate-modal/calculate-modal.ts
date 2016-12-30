import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, ViewController} from 'ionic-angular';
import { ReviewModalPage } from '../review-modal/review-modal';

/*
  Generated class for the ReviewModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calculate-modal',
  templateUrl: 'calculate-modal.html'
})
export class CalculateModalPage {
  @ViewChild(Content) content: Content;
    CalculateItemVisibility: boolean;
    LvCycleTime: boolean;
    LvScrapReworkWaste: boolean;
    LvSpaceUtilization: boolean;
    LvInventoryAssets: boolean;
    LvOthers: boolean;
    LvHardSaving: boolean;
    LvSoftSaving: boolean;

    BenefitCategory: string;

    SoftSaving: number;
    HardSaving: number;

    CtTime: number;
    CtCost: number;
    CtFreq: number;
    CtFreqMultiplier: number;
    CtPeople: number;
    CtTotal: number;

    SrwUnitReduction: number;
    SrwCost: number;
    SrwTotal: number;

    SuSpaceReduction: number;
    SuOverhead: number;
    SuTotal: number;

    IaQuantity: number;
    IaCost: number;
    IaTotal: number;

    OoTotal: number;
    OoNotes: string;

    HsPeopleCost: number;
    HsOvertime: number;
    HsTempWorker: number;
    HsSrw: number;
    HsOther: number;
    HsNotes: string;

    constructor(
      public navCtrl: NavController,
      public viewCtrl: ViewController)
      {
        this.CalculateItemVisibility= false;
        this.BenefitCategory="qs";
        this.reset();
    }

  ionViewDidLoad() {
    console.log('Hello ReviewModalPage Page');
  }

  toggleCalculateItemVisibility(event) {
    console.log('CalculateItem is Activated');
    switch (this.BenefitCategory) {
      case "qs":
      console.log('In qs');
      this.CalculateItemVisibility = false;
      this.content.resize();
      this.reset();
      break;

      case "ct":
      console.log('In ct');
      this.CalculateItemVisibility = true;
      this.content.resize();
      this.reset();
      this.LvCycleTime = true;
      break;

      case "sr":
      console.log('In sr');
      this.CalculateItemVisibility = true;
      this.content.resize();
      this.reset();
      this.LvScrapReworkWaste = true;
      break;

      case "su":
      this.CalculateItemVisibility = true;
      this.content.resize();
      this.reset();
      this.LvSpaceUtilization = true;
      break;

      case "ia":
      this.CalculateItemVisibility = true;
      this.content.resize();
      this.reset();
      this.LvInventoryAssets = true;
      break;

      case "oo":
      this.CalculateItemVisibility = true;
      this.content.resize();
      this.reset();
      this.LvOthers = true;
      break;

      default:
      console.log('No case found');
      break;
    }
  }

  toggleSoftSavingCalculator(){
    this.LvSoftSaving=!this.LvSoftSaving;
    this.content.resize();
  }

  toggleHardSavingCalculator(){
    this.LvHardSaving=!this.LvHardSaving;
    this.content.resize();
  }

dismiss() {
  this.viewCtrl.dismiss();
}

goToReviewPage(){
  this.navCtrl.push(ReviewModalPage);
}

reset(){
  this.LvCycleTime = false;
  this.LvScrapReworkWaste = false;
  this.LvSpaceUtilization = false;
  this.LvInventoryAssets = false;
  this.LvOthers = false;
  this.LvHardSaving = false;
  this.LvSoftSaving = false;

  this.SoftSaving = 0;
  this.HardSaving = 0;

  this.CtTime = 0;
  this.CtCost = 0;
  this.CtFreq= 0;
  this.CtFreqMultiplier = 220;
  this.CtPeople = 0;
  this.CtTotal = 0;

  this.SrwUnitReduction = 0;
  this.SrwCost = 0;
  this.SrwTotal = 0;

  this.SuSpaceReduction = 0;
  this.SuOverhead = 0;
  this.SuTotal = 0;

  this.IaQuantity = 0;
  this.IaCost = 0;
  this.IaTotal = 0;

  this.OoTotal = 0;
  this.OoNotes = "";

  this.HsPeopleCost = 0;
  this.HsOvertime = 0;
  this.HsTempWorker = 0;
  this.HsSrw = 0;
  this.HsOther = 0;
  this.HsNotes = "";
}

calculate(){
  this.CtTotal = this.CtTime/60 * this.CtCost * this.CtFreq * this.CtFreqMultiplier * this.CtPeople;
  this.SrwTotal = this.SrwUnitReduction * this.SrwCost;
  this.SuTotal = this.SuSpaceReduction * this.SuOverhead;
  this.IaTotal = this.IaQuantity * this.IaCost;

  this.HsSrw = this.SrwTotal;

  this.SoftSaving = this.CtTotal + this.SrwTotal + this.SuTotal + this.IaTotal + this.OoTotal;
  this.HardSaving = this.HsPeopleCost + this.HsOvertime + this.HsTempWorker + this.HsSrw + this.HsOther;
}

}
