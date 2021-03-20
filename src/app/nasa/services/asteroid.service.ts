import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { environment as envProd } from '../../../environments/environment.prod';
import { Asteroid } from '../../shared/interfaces/nasa/asteroid.interface';


@Injectable({
  providedIn: 'root'
})
export class AsteroidService {

  constructor( private http: HttpClient ) { }


  getAsteroids(): Observable<Asteroid> {
    return this.http.get<Asteroid>(`${envProd.dbFirebase}nasa/asteroidbrowse.json`);
  }

}
