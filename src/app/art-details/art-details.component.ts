import { Component, Input } from '@angular/core';
import { PicturesService } from '../services/pictures.service';
import { Art } from '../models/modules.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.css']
})
export class ArtDetailsComponent {
  art : Art | undefined;
  @Input() id:string = '';
  private sub: any;


  constructor(private route: ActivatedRoute, private picturesService : PicturesService) {
  
  }
  ngOnInit() {
    console.log(this.picturesService.getPicture(this.id))
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
