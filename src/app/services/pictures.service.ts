import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Art } from '../models/art.model';
import { catchError, map, startWith, switchMap, take } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PicturesService {


  constructor(private httpService: HttpClient) {
  }
  getPictures(page = 1, limit = 49): Observable<Art[]> {
    return this.httpService.get<any>(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`, {}).pipe(map(r => r.data),
    catchError(err => throwError(err)))
  }

  getPicture(id: string): Observable<Art> {
    return this.httpService.get<any>("https://api.artic.edu/api/v1/artworks/" + id, {}).pipe(map(r => r.data))
  }
}
