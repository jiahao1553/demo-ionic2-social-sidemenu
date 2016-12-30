import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommentModalPage } from '../comment-modal/comment-modal';
import { SearchModalPage } from '../search-modal/search-modal';
import { FeedPage } from '../feed/feed';
import { PostModalPage } from '../post-modal/post-modal';
import { Post } from '../../models/post';
import { Shared } from '../../providers/shared';
import { DetailPage } from '../detail/detail';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  post: Post;
  title: string;
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
  public Param: Shared) {
    this.post = navParams.get('post');
    this.title = Param.PageTitle;
  }

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }

  openComment() {
    this.navCtrl.push(CommentModalPage);
    }

    openSearch() {
      this.navCtrl.push(SearchModalPage);
      }

      openByProfile(post:Post) {
        this.Param.PageTitle = post.PostBy;
        this.navCtrl.push(ProfilePage, {post});
      }

      openByArea(post:Post) {
        this.Param.PageTitle = post.Area;
        this.navCtrl.push(FeedPage, {post});
      }

      openByProgress(post:Post) {
        this.Param.PageTitle = post.Progress;
        this.navCtrl.push(FeedPage, {post});
      }

      goToDetailPage(post:Post) {
        this.navCtrl.push(DetailPage, {post});
      }

      openPost() {
        this.navCtrl.push(PostModalPage);
        }

}
