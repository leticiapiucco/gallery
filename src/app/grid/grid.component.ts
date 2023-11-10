import { Component } from '@angular/core';
import { PicturesService } from '../services/pictures.service';
import { Art } from '../models/modules.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent{
  artworks = new Map<string, string>();
  constructor(private pictureService: PicturesService){

  }
  ngOnInit() {
    this.artworks = this.pictureService.getPictures()
  }
}
