import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { Item } from '../../../shared/interfaces/nasa.search';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  loading: boolean = false;
  itemsSearch: Item[] = [];
  showSearch: boolean = false;

  constructor( private library: LibraryService ) { }

  ngOnInit(): void {

  }

  searchLibrary( q: string ) {
    this.loading = true;
    this.showSearch = false;
    this.library.searchMedia( q )
          .subscribe( res => {
            console.log(res);
            this.loading = false;
            this.itemsSearch = res
            this.showSearch = true;         
          });
  }

}
