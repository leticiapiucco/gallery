import { Component, Input, TemplateRef } from '@angular/core';
import { PicturesService } from '../services/pictures.service';
import { Art } from '../models/modules.component';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, catchError } from 'rxjs';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.css']
})
export class ArtDetailsComponent {
  art$: Observable<Art> | undefined;
  @Input() id: string = '';


  constructor(private route: ActivatedRoute, private picturesService: PicturesService) {

  }
  ngOnInit(): void {

    // so here we don't do subscribing as you'll be responsible to unsubing so its better to just use async pipe when you display check the html
    this.art$ = this.picturesService.getPicture(this.id)

    // print this to check the values from the object then you can add it to your type in models
    // this.art$.subscribe(next => console.log(next))
  }
}
