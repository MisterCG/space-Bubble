import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NasaSearch, Item } from '../../shared/interfaces/nasa.search';
import { SpaceXLaunches } from '../../shared/interfaces/spaceX.launches';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor( private http : HttpClient) { }

  searchNasa(): Observable<Item[]> {

    return this.http.get<NasaSearch>('http://localhost:3005/search-media-nasa/Apollo 11')
                .pipe(
                  map( res => res.collection.items )
                )

  }


  searchSpaceX(): Observable<SpaceXLaunches[]> {

    return this.http.get<SpaceXLaunches[]>('http://localhost:3005/launches-spaceX');

  }


}
