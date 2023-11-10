import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ArtDetailsComponent } from './art-details/art-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: GridComponent },
  { path: 'artworks/:id', component: ArtDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())]
})
export class AppRoutingModule { 
}
