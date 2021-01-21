import { Component, OnInit } from '@angular/core';
import { AsteroidService } from '../../services/asteroid.service';


@Component({
  selector: 'app-asteroid-browse',
  templateUrl: './asteroid-browse.component.html',
  styleUrls: ['./asteroid-browse.component.css']
})
export class AsteroidBrowseComponent implements OnInit {

  constructor( private astertoidService: AsteroidService ) { }

  ngOnInit(): void {

    this.astertoidService.getAsteroids()
            .subscribe( res => {
              console.log(res);
            })

  }

}
