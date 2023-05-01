import { Component } from '@angular/core';
import { Direction } from '../core/models/direction.model';
import { TechnologyGroup } from '../core/models/technology-group.model';
import { configureDirections } from '../core/utils/configure-directions';
import { configureTechnologyGroups } from '../core/utils/configure-technology-groups';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  directions: Direction[];
  technologyGroups: TechnologyGroup[];

  constructor() {
    this.directions = configureDirections();
    this.technologyGroups = configureTechnologyGroups();
  }
}
