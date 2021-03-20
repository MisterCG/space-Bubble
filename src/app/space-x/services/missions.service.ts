import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { environment as envProd } from '../../../environments/environment.prod';
import { SpaceXMissions } from '../../shared/interfaces/spaceX.mission';


@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  constructor( private http: HttpClient ) { }

  getMissions(): Observable<SpaceXMissions[]> {
    return this.http.get<SpaceXMissions[]>(`${envProd.urlApi}missions-spaceX`);
  }

  getOneMissions( id: number ) {

  }



}
