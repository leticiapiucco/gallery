import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GridComponent } from './grid/grid.component';
import { ModulesComponent } from './models/modules.component';
import { ArtDetailsComponent } from './art-details/art-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GridComponent,
    ModulesComponent,
    ArtDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
