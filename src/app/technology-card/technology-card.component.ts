import { Component, Input } from '@angular/core';
import { Technology } from '../../core/models/technology.model';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.scss']
})
export class TechnologyCardComponent {
  @Input() technology: Technology;

  constructor() {
    this.technology = new Technology('', '', '', '', '');
  }
}
