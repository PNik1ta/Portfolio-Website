import { Component, Input } from '@angular/core';
import { Direction } from '../../core/models/direction.model';
import { DirectionType } from '../../core/enums/direction-type.enum';

@Component({
  selector: 'app-direction-card',
  templateUrl: './direction-card.component.html',
  styleUrls: ['./direction-card.component.scss']
})

export class DirectionCardComponent {
  @Input() direction: Direction;

  constructor() {
    this.direction = new Direction('', '', '', DirectionType.BACKEND);
  }
}
