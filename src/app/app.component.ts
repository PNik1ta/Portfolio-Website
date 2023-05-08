import { Component, OnInit, ViewChild } from '@angular/core';


import { Direction } from '../core/models/direction.model';
import { TechnologyGroup } from '../core/models/technology-group.model';
import { configureDirections } from '../core/utils/configure-directions';
import { configureTechnologyGroups } from '../core/utils/configure-technology-groups';
import { Ability } from '../core/models/ability.model';
import { configureAbilities } from '../core/utils/configute-abilities';
import { FileService } from '../core/services/file.service';
import { SwiperOptions } from 'swiper';
import { Project } from '../core/models/project.model';
import { configureProjects } from '../core/utils/configure-projects';
import { SwiperComponent } from 'swiper/angular';
import * as AOS from 'aos';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { Counter } from '../core/models/counter.model';
import { configureCounters } from '../core/utils/configure-counters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  directions: Direction[];
  technologyGroups: TechnologyGroup[];
  abilities: Ability[];
  projects: Project[];
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  gitUrl: string = environment.gitUrl;
  counters: Counter[];

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      500: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  }

  constructor(private readonly fileService: FileService, private sanitizer: DomSanitizer) {
    this.directions = configureDirections(sanitizer, this.gitUrl);
    this.technologyGroups = configureTechnologyGroups(sanitizer, this.gitUrl);
    this.abilities = configureAbilities();
    this.projects = configureProjects(sanitizer, this.gitUrl);
    this.counters = configureCounters();
  }

  ngOnInit(): void {
    AOS.init();
  }

  downloadCV(): void {
    this.fileService.downloadLocalFile(`${this.gitUrl}assets/pdf/Pozdeyev Nikita CV.pdf`, 'Pozdeyev Nikita CV');
  }

  slideNext() {
    this.swiper?.swiperRef.slideNext(100);
  }

  slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  }
}
