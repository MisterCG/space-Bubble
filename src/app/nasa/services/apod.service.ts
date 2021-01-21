import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apod } from '../../shared/interfaces/nasa/apod.interface';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor( private http: HttpClient ) { }

  takeApod():Observable<Apod> {
    return this.http.get<Apod>('https://space-bubble-default-rtdb.firebaseio.com/nasa/apodoftoday.json');
  }

}
