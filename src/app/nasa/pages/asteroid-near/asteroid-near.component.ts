import { Component, OnInit } from '@angular/core';
import { AsteroidNearService } from '../../services/asteroid-near.service';
import { NearEarthObjects } from '../../../shared/interfaces/nasa/asteroid.near.interface'

@Component({
  selector: 'app-asteroid-near',
  templateUrl: './asteroid-near.component.html',
  styleUrls: ['./asteroid-near.component.css']
})
export class AsteroidNearComponent implements OnInit {

  nearObjectOfToday: any = {};

  constructor( private asteroidNearService: AsteroidNearService ) { }

  ngOnInit(): void {

    this.asteroidNearService.getNearObjects()
          .subscribe( res => this.nearObjectOfToday = res );

  }

}
