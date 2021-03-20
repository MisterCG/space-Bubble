import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';
import { environment as envProd } from '../../../environments/environment.prod';
import { NasaSearch, Item } from '../../shared/interfaces/nasa.search';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor( private http: HttpClient ) { }

  searchMedia( query: string ): Observable<Item[]> {
    return this.http.get(`${envProd.urlApi}search-media-nasa/${query}`)
    			.pipe( map((res: NasaSearch) => res.collection.items))
  }


}
