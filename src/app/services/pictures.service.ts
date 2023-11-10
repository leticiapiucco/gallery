import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Art } from '../models/modules.component';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  
  pictures = new Map<string, string>();
  picture = new Array<Art>();

  constructor(private httpService: HttpClient) {
    this.httpService.get<any>('https://api.artic.edu/api/v1/artworks?page=2&limit=50', {})
      .subscribe(response => {
        for(let d in response.data){
            this.pictures.set(response.data[d]['id'], response.data[d]['image_id'])
        }
      });
  }
  getPictures() {
    return this.pictures
  }

  getPicture(id:string){
    return this.httpService.get<any>("https://api.artic.edu/api/v1/artworks/"+ id, {}).pipe(map(res => res.json()));
  }

}
