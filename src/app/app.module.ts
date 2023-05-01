import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectionCardComponent } from './direction-card/direction-card.component';
import { TechnologyCardComponent } from './technology-card/technology-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectionCardComponent,
    TechnologyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
