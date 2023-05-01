import { Technology } from "./technology.model";

export class TechnologyGroup {
  constructor(
    public groupName: string,
    public technologies: Technology[],
  ) {}
}
