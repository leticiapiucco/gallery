import { Component } from '@angular/core';

export interface Art {
  title:string,
  author:string,
  image_id:string,
  place_of_origin: string,
  type: string,
  //tags: string[],
}

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})



export class ModulesComponent {
}
