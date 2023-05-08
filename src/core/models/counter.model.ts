import { NgxAnimatedCounterParams } from '@bugsplat/ngx-animated-counter';

export class Counter {
  constructor(
    public params: NgxAnimatedCounterParams,
    public text: string,
    public link?: string,
    public hoverDescription?: string
  ) {}
}
