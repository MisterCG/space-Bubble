import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asteroid } from '../../shared/interfaces/nasa/asteroid.interface';


@Injectable({
  providedIn: 'root'
})
export class AsteroidService {

  constructor( private http: HttpClient ) { }


  getAsteroids(): Observable<Asteroid> {
    return this.http.get<Asteroid>('https://space-bubble-default-rtdb.firebaseio.com/nasa/asteroidbrowse.json');
  }

}
