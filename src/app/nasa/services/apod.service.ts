import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { environment as envProd } from '../../../environments/environment.prod';
import { Apod } from '../../shared/interfaces/nasa/apod.interface';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor( private http: HttpClient ) { }

  takeApod():Observable<Apod> {
    return this.http.get<Apod>(`${envProd.dbFirebase}nasa/apodoftoday.json`);
  }

}
