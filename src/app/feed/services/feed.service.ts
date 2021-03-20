import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';
import { environment as envProd } from '../../../environments/environment.prod';
import { NasaSearch, Item } from '../../shared/interfaces/nasa.search';
import { SpaceXLaunches } from '../../shared/interfaces/spaceX.launches';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor( private http : HttpClient) { }

  searchNasa(): Observable<Item[]> {

    return this.http.get<NasaSearch>(`${envProd.urlApi}search-media-nasa/Apollo 11`)
                .pipe(
                  map( res => res.collection.items )
                )

  }


  searchSpaceX(): Observable<SpaceXLaunches[]> {

    return this.http.get<SpaceXLaunches[]>(`${envProd.urlApi}launches-spaceX`);

  }


}
