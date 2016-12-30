import { Component } from '@angular/core';
import { NavController, /*ModalController, */NavParams } from 'ionic-angular';

import { Shared } from '../../providers/shared';
import { ProfilePage } from '../profile/profile';
import { DetailPage } from '../detail/detail';
import { CommentModalPage } from '../comment-modal/comment-modal';
import { SearchModalPage } from '../search-modal/search-modal';
import { PostModalPage } from '../post-modal/post-modal';
import { Post } from '../../models/post';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  title: string;
  post: Post[];

  constructor(
    public navCtrl: NavController,
    public Params: Shared,
    // public modalCtrl: ModalController,
    public navParams: NavParams) {
    this.title = Params.PageTitle;
    this.post = Params.Post;
  }

  ionViewDidLoad() {
    console.log('Hello FeedPage Page');
  }

  goToDetailPage(post:Post) {
    this.navCtrl.push(DetailPage, {post});
  }

  openByProfile(post:Post) {
    this.Params.PageTitle = post.PostBy;
    this.navCtrl.push(ProfilePage, {post});
  }

  openByArea(post:Post) {
    this.Params.PageTitle = post.Area;
    this.navCtrl.push(FeedPage, {post});
  }

  openByProgress(post:Post) {
    this.Params.PageTitle = post.Progress;
    this.navCtrl.push(FeedPage, {post});
  }

  openComment() {
    this.navCtrl.push(CommentModalPage);
    // let modal = this.modalCtrl.create(CommentModalPage);
    // modal.present();
  }

  openSearch() {
    this.navCtrl.push(SearchModalPage);
  }

  openPost() {
    this.navCtrl.push(PostModalPage);
  }

}
