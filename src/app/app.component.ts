import { Component } from '@angular/core';
import { Direction } from '../core/models/direction.model';
import { TechnologyGroup } from '../core/models/technology-group.model';
import { configureDirections } from '../core/utils/configure-directions';
import { configureTechnologyGroups } from '../core/utils/configure-technology-groups';
import { Ability } from '../core/models/ability.model';
import { configureAbilities } from '../core/utils/configute-abilities';
import { FileService } from '../core/services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  directions: Direction[];
  technologyGroups: TechnologyGroup[];
  abilities: Ability[];

  constructor(private readonly fileService: FileService) {
    this.directions = configureDirections();
    this.technologyGroups = configureTechnologyGroups();
    this.abilities = configureAbilities();
  }

  downloadCV(): void {
    this.fileService.downloadLocalFile('/assets/pdf/Pozdeyev Nikita CV.pdf', 'Pozdeyev Nikita CV');
  }
}
