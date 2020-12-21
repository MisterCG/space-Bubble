import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NasaSearch, Item } from '../../shared/interfaces/nasa.search';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor( private http : HttpClient) { }

  searchNasa(): Observable<Item[]> {

    return this.http.get<NasaSearch>('https://nasa-spacex-api.herokuapp.com/search-media-nasa/moon')
                .pipe(
                  map( res => res.collection.items )
                )

  }


  searchSpaceX () {

    this.http.get('');

  }


}
