import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor( private feedServices: FeedService ) { }

  ngOnInit(): void {

    this.feedServices.searchNasa()
          .subscribe(res => console.log);

  }

}
