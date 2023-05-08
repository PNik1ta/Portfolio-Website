import { SafeUrl } from "@angular/platform-browser";

export class Technology {
  constructor(
    public iconPath: string | SafeUrl,
    public name: string,
    public description: string,
    public btnContent: string,
    public websiteUrl: string
  ) {}
}
