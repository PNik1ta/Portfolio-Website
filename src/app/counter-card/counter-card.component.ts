import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Counter } from '../../core/models/counter.model';

@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.scss']
})
export class CounterCardComponent implements AfterViewInit {
  @Input() counter: Counter;
  @Input() counterNull: Counter;
  shouldAnimate: boolean;
  @ViewChild('counterEl') counterEl?: ElementRef;

  constructor() {
    this.counter = new Counter({ start: 0, end: 0, interval: 0, increment: 0 }, '');
    this.counterNull = new Counter({ start: 0, end: 0, interval: 0, increment: 0 }, '');
    this.shouldAnimate = false;
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.shouldAnimate = entry.isIntersecting;
      },
      { threshold: 0.5 }
    );
    observer.observe(this.counterEl?.nativeElement);
  }
}
