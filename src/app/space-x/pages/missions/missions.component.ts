import { Component, OnInit } from '@angular/core';
import { MissionsService } from '../../services/missions.service';
import { SpaceXMissions } from '../../../shared/interfaces/spaceX.mission';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  public missions: SpaceXMissions[] = [];

  constructor( private missionsService: MissionsService ) { }

  ngOnInit(): void {

    this.missionsService.getMissions()
          .subscribe( res => {
            this.missions = res;
          });

  }

}
