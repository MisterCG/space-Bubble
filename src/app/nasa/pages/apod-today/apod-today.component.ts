import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services/apod.service';


@Component({
  selector: 'app-apod-today',
  templateUrl: './apod-today.component.html',
  styleUrls: ['./apod-today.component.css']
})
export class ApodTodayComponent implements OnInit {

  public apod: string;

  constructor( private apodService: ApodService ) { }

  ngOnInit(): void {
    this.apodService.takeApod()
          .subscribe( res => {
            
            this.apod = res.url;

            console.log(res)
          });

  }

}
