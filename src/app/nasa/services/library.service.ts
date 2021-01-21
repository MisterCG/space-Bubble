import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor( private http: HttpClient ) { }

  searchMedia( query: string ) {
    return this.http.get(`http://localhost:3005/search-media-nasa/${query}`);
  }


}
