import { Component, Input, OnInit } from '@angular/core';
import { Art } from '../models/art.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input({required: true}) artworksObservable: Observable<Array<Art>> | undefined
  artworks : Array<Art> = []
  ngOnInit(){
    this.artworksObservable?.subscribe((value)=>
      this.artworks = value
    )
  }
}