import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { FeedPage } from '../pages/feed/feed';
import { LoginPage } from '../pages/login/login';
import { Shared } from '../providers/shared';
import { Post } from '../models/post';
import { ProfilePage } from '../pages/profile/profile';
import { LogoutPage } from '../pages/logout/logout';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  post: Post;
  constructor(
    public platform: Platform,
    public Param: Shared) {
    this.initializeApp();

    this.post = {
          PostBy: 'Mickey', Avatar: 'http://admissions.berkeley.edu/sites/default/files/UCB_landingpage_images_600x300_212.jpg',
          Topic: 'Who made the Wikipedia?', Description: 'Sanger and Wales founded Wikipedia. While Wales is credited with defining the goal of making a publicly editable encyclopedia, Sanger is credited with the strategy of using a wiki to reach that goal. On January 10, 2001, Sanger proposed on the Nupedia mailing list to create a wiki as a "feeder" project for Nupedia',
          PostOn: '5 Nov, 2016', Image: 'http://www.freewebheaders.com/wordpress/wp-content/gallery/beautiful-landscape/pink-purple-sky-and-spring-nature-landscape-header.jpg',
          Area: 'Production-LCMS', Likes: 1, Comments: 10, Progress: 'Open'
        }
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: FeedPage},//, post: this.post },
      { title: 'Apple', component: FeedPage},
      { title: 'Banana', component: FeedPage},
      { title: 'Coconut', component: FeedPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.Param.PageTitle = page.title;
    this.nav.setRoot(page.component);
  }

  openByProfile(post:Post) {
    this.Param.PageTitle = post.PostBy;
    this.nav.setRoot(ProfilePage, {post});
  }

  goToLogoutPage(){
    this.nav.setRoot(LogoutPage);
  }
}
