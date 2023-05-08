import { SafeUrl } from "@angular/platform-browser";
import { DirectionType } from "../enums/direction-type.enum";

export class Direction {
  constructor(
    public title: string,
    public description: string,
    public iconPath: string | SafeUrl,
    public type: DirectionType
  ) {}
}
