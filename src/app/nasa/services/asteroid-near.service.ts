import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsteroidNear } from '../../shared/interfaces/nasa/asteroid.near.interface';

@Injectable({
  providedIn: 'root'
})
export class AsteroidNearService {

  constructor( private http: HttpClient ) { }


  getNearObjects(): Observable<AsteroidNear> {
    return this.http.get<AsteroidNear>('https://space-bubble-default-rtdb.firebaseio.com/nasa/asteroidnear.json');
  }

}
