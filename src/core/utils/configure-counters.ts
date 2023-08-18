import { Counter } from "../models/counter.model";

export function configureCounters(): Counter[] {
  return [
    new Counter({ start: 0, end: 51, interval: 50, increment: 1, }, 'Количество решенных задач на TypeScript', 'https://github.com/PNik1ta/TS-tasks', 'Перейти в репозиторий'),
    new Counter({ start: 0, end: 9, interval: 50, increment: 1, }, 'Окончено курсов'),
  ]
};
