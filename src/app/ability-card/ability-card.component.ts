import { Component, Input } from '@angular/core';
import { Ability } from '../../core/models/ability.model';

@Component({
  selector: 'app-ability-card',
  templateUrl: './ability-card.component.html',
  styleUrls: ['./ability-card.component.scss']
})
export class AbilityCardComponent {
  @Input() abilityNumber: number;
  @Input() ability: Ability;

  constructor() {
    this.abilityNumber = 0;
    this.ability = new Ability('', '');
  }
}
