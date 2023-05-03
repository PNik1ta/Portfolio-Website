import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectionCardComponent } from './direction-card/direction-card.component';
import { TechnologyCardComponent } from './technology-card/technology-card.component';
import { AbilityCardComponent } from './ability-card/ability-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    DirectionCardComponent,
    TechnologyCardComponent,
    AbilityCardComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
