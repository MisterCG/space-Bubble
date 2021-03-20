import { Component, OnInit } from '@angular/core';
import { AsteroidService } from '../../services/asteroid.service';
import { NearEarthObject } from '../../../shared/interfaces/nasa/asteroid.interface'

@Component({
  selector: 'app-asteroid-browse',
  templateUrl: './asteroid-browse.component.html',
  styleUrls: ['./asteroid-browse.component.css']
})
export class AsteroidBrowseComponent implements OnInit {

  constructor( private astertoidService: AsteroidService ) { }

  asteroids: NearEarthObject[] = [];

  ngOnInit(): void {

    this.astertoidService.getAsteroids()
            .subscribe( res => {
              this.asteroids = res.near_earth_objects;
            })

  }

}
