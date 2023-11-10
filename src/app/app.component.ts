import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { PicturesService } from './services/pictures.service';

interface Art {
	name: string,
	image_id: string,
}
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'gallery';
  constructor(){
  }
  ngOnInit() {

	}
}
