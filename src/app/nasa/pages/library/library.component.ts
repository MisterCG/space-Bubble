import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor( private library: LibraryService ) { }

  ngOnInit(): void {

  }

  searchLibrary( q: string ) {
    this.library.searchMedia( q )
          .subscribe( res => console.log(res) );
  }

}
