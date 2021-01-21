import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs'
import { FeedService } from '../../services/feed.service';
import { Item } from '../../../shared/interfaces/nasa.search';
import { SpaceXLaunches } from '../../../shared/interfaces/spaceX.launches';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public itemsSearch: Item[] = [];
  public launches: SpaceXLaunches[] = [];
  public show = false;

  constructor(  private feedServices: FeedService,
                private router: Router
    ) { } 

  ngOnInit(): void {

    combineLatest([
      this.feedServices.searchNasa(),
      this.feedServices.searchSpaceX()
    ]).subscribe( ([nasaItems, spaceXLaunches]) => {
      this.itemsSearch = nasaItems.slice(0, 12);
      this.launches = spaceXLaunches.slice(0, 12); 
      this.show = true;
    });
  }

}
