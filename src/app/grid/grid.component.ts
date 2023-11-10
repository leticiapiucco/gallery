import { Component } from '@angular/core';
import { PicturesService } from '../services/pictures.service';
import { Art } from '../models/modules.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  artworks$: Observable<Art[]> | undefined
  constructor(private pictureService: PicturesService) {

  }
  ngOnInit() {
    // now you can do some fancy paging like infinite scroll
    this.artworks$ = this.pictureService.getPictures()
  }
}
