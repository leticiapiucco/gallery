import { Component } from '@angular/core';

export type Art = {
  id: number
  title: string,
  author: string,
  image_id: string,
  place_of_origin: string,
  type: string,
}

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})



export class ModulesComponent {
}
