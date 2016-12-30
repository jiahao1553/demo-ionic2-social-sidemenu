import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Post } from '../models/post';

/*
  Generated class for the Shared provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Shared {
  PageTitle: any;
  Id: any;
  Topic: any;
  Description: any;
  Area: any;
  AreaSet: any = [];
  Progress: any;
  ImplementationDate: any;
  Username: any;
  Image: any;
  Post: Post[];

  constructor(public http: Http) {
    console.log('Hello Shared Provider');
    this.PageTitle='';
    this.Id='';
    this.Topic='';
    this.Description='';
    this.Area='';
    this.Progress='';
    this.ImplementationDate='';
    this.Username='';
    this.Image='';
    this.AreaSet = [
      {id: 'a', value: 'Apple'},
      {id: 'b', value: 'Banana'},
      {id: 'c', value: 'Coconut'}
    ];

    //temporary
    this.Post = [
      {
        PostBy: 'Albert', Avatar: 'http://img.kpopmap.com/2016/01/sm-rookies-kun-profile.jpg',
        Topic: 'Who made the Wikipedia?', Description: 'Sanger and Wales founded Wikipedia. While Wales is credited with defining the goal of making a publicly editable encyclopedia, Sanger is credited with the strategy of using a wiki to reach that goal. On January 10, 2001, Sanger proposed on the Nupedia mailing list to create a wiki as a "feeder" project for Nupedia',
        PostOn: '5 Nov, 2016', Image: 'http://www.freewebheaders.com/wordpress/wp-content/gallery/beautiful-landscape/pink-purple-sky-and-spring-nature-landscape-header.jpg',
        Area: 'Production-LCMS', Likes: 1, Comments: 10, Progress: 'Open'
      },
      {
        PostBy: 'John', Avatar: 'http://admissions.berkeley.edu/sites/default/files/UCB_landingpage_images_600x300_212.jpg',
        Topic: 'Barack Obama', Description: 'Barack Hussein Obama II is an American politician who is the 44th and current President of the United States. He is the first African American to hold the office and the first president born outside the continental United States',
        PostOn: '4 Nov, 2016', Image: 'http://onfocusproduction.com/wp-content/uploads/2016/08/1135940-pictures-of-landscape-hd.jpg',
        Area: 'AAS', Likes: 9, Comments: 2, Progress: 'Progress'
      },
      {
        PostBy: 'Kelly', Avatar: 'https://profile.microsoft.com/RegsysProfileCenter/Images/personal_info.jpg',
        Topic: 'Donald Trump', Description: 'Donald John Trump is an American businessman, reality television personality, real estate mogul and President-elect of the United States.',
        PostOn: '1 Oct, 2016', Image: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
        Area: 'Others', Likes: 3, Comments: 7, Progress: 'Closed'
      },
    ]

  }

}
