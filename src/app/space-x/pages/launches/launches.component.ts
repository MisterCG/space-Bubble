import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../../services/launches.service';
import { SpaceXLaunches } from '../../../shared/interfaces/spaceX.launches';


@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  public launches: SpaceXLaunches[] = [];

  constructor( private launchServices: LaunchesService ) { }

  ngOnInit(): void {

    this.launchServices.getLaunches()
            .subscribe( res => {
              this.launches = res;
            });

  }

}
