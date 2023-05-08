import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectionCardComponent } from './direction-card/direction-card.component';
import { TechnologyCardComponent } from './technology-card/technology-card.component';
import { AbilityCardComponent } from './ability-card/ability-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SwiperModule } from 'swiper/angular';
import { CounterCardComponent } from './counter-card/counter-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectionCardComponent,
    TechnologyCardComponent,
    AbilityCardComponent,
    ProjectCardComponent,
    CounterCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    NgxAnimatedCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
