import { SafeUrl } from "@angular/platform-browser";

export class Project {
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string | SafeUrl,
    public link: string
  ) {}
}
