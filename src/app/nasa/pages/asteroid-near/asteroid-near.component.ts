import { Component, OnInit } from '@angular/core';
import { AsteroidNearService } from '../../services/asteroid-near.service';


@Component({
  selector: 'app-asteroid-near',
  templateUrl: './asteroid-near.component.html',
  styleUrls: ['./asteroid-near.component.css']
})
export class AsteroidNearComponent implements OnInit {

  constructor( private asteroidNearService: AsteroidNearService ) { }

  ngOnInit(): void {

    this.asteroidNearService.getNearObjects()
          .subscribe( res => console.log(res) );

  }

}
