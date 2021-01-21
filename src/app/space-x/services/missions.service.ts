import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceXMissions } from '../../shared/interfaces/spaceX.mission';


@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  constructor( private http: HttpClient ) { }

  getMissions(): Observable<SpaceXMissions[]> {
    return this.http.get<SpaceXMissions[]>('http://localhost:3005/missions-spaceX');
  }

  getOneMissions( id: number ) {

  }



}
