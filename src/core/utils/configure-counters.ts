import { Counter } from "../models/counter.model";

export function configureCounters(): Counter[] {
  return [
    new Counter({ start: 0, end: 19, interval: 50, increment: 1,  }, 'Typescript solved tasks', 'https://github.com/PNik1ta/TS-tasks', 'Go to repository'),
    new Counter({ start: 0, end: 9, interval: 50, increment: 1,  }, 'Courses finished'),
  ]
}
