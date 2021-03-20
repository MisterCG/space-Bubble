import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';
import { environment as envProd } from '../../../environments/environment.prod';
import { AsteroidNear } from '../../shared/interfaces/nasa/asteroid.near.interface';

@Injectable({
  providedIn: 'root'
})
export class AsteroidNearService {
  
  nearObjectsOfToday: any = {};


  constructor( private http: HttpClient ) { }


  getNearObjects(): Observable<AsteroidNear> {
    return this.http.get<AsteroidNear>(`${envProd.dbFirebase}nasa/asteroidnear.json`)
    				.pipe(map((res) => {
    					Object.getOwnPropertyNames(res.near_earth_objects).forEach( date => {
    						this.nearObjectsOfToday.date = date;
    						this.nearObjectsOfToday.near_objects = res.near_earth_objects[date];
    					});
    					return this.nearObjectsOfToday;
    				}));
  }

}
