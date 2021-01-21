import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpaceXLaunches } from '../../shared/interfaces/spaceX.launches';


@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor( private http: HttpClient ) { }

  getLaunches(): Observable<SpaceXLaunches[]> {

    return this.http.get<SpaceXLaunches[]>('http://localhost:3005/launches-spaceX');
  }

}
