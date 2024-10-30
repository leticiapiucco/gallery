import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Art } from '../models/art.model';
import { PicturesService } from '../services/pictures.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  artworks$: Observable<Art[]> | undefined;

  constructor(private picturesService: PicturesService){
  }

  ngOnInit() {
    this.artworks$ = this.picturesService.getPictures()
  }
}


