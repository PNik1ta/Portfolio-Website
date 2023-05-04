import { Component, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  directions: Direction[];
  technologyGroups: TechnologyGroup[];
  abilities: Ability[];
  projects: Project[];
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  swiperConfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 50,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  }

  constructor(private readonly fileService: FileService) {
    this.directions = configureDirections();
    this.technologyGroups = configureTechnologyGroups();
    this.abilities = configureAbilities();
    this.projects = configureProjects();
  }

  downloadCV(): void {
    this.fileService.downloadLocalFile('/assets/pdf/Pozdeyev Nikita CV.pdf', 'Pozdeyev Nikita CV');
  }

  slideNext(){
    this.swiper?.swiperRef.slideNext(100);
  }

  slidePrev(){
    this.swiper?.swiperRef.slidePrev(100);
  }
}
