import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { FeedPage } from '../pages/feed/feed';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { SearchModalPage } from '../pages/search-modal/search-modal';
import { CommentModalPage } from '../pages/comment-modal/comment-modal';
import { LogoutPage } from '../pages/logout/logout';
import { DetailPage } from '../pages/detail/detail';
import { CalculateModalPage } from '../pages/calculate-modal/calculate-modal';
import { ReviewModalPage } from '../pages/review-modal/review-modal';
import { PostModalPage } from '../pages/post-modal/post-modal';
import { Shared } from '../providers/shared';

@NgModule({
  declarations: [
    MyApp,
    FeedPage,
    LoginPage,
    ProfilePage,
    SearchModalPage,
    CommentModalPage,
    LogoutPage,
    DetailPage,
    CalculateModalPage,
    ReviewModalPage,
    PostModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage,
    LoginPage,
    ProfilePage,
    SearchModalPage,
    CommentModalPage,
    LogoutPage,
    DetailPage,
    CalculateModalPage,
    ReviewModalPage,
    PostModalPage
  ],
  providers: [ Shared ]
})
export class AppModule {}
