import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Art } from '../models/modules.component';
import { catchError, map, startWith, switchMap, take } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PicturesService {


  constructor(private httpService: HttpClient) {
  }
  getPictures(page = 1, limit = 50): Observable<Art[]> {
    // in general its a good idea to type the return type so you can get decent autocomplete
    // so in general try to not subscribe to things in services, this is the job of the component that display things
    // check out rxjs mainly (pipe and map and async pipe)
    return this.httpService.get<any>(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`, {}).pipe(map(r => r.data),
      catchError(err => throwError(err)))
  }

  getPicture(id: string): Observable<Art> {
    return this.httpService.get<any>("https://api.artic.edu/api/v1/artworks/" + id, {}).pipe(map(r => r.data))
  }
}
