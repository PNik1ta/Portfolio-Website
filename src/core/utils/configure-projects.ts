import { DomSanitizer } from "@angular/platform-browser";
import { Project } from "../models/project.model";

export function configureProjects(sanitizer: DomSanitizer, gitUrl: string): Project[] {
  return [
    new Project('Relvise', 'This is a site of Relvise company',sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/images/projects/relvise-project-image.png`), 'https://pnik1ta.github.io/Relvise/'),
    new Project('Baloons tourism', 'This is a site of Baloons tour company made in Russian language', sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/images/projects/baloons-project-image.png`), 'https://pnik1ta.github.io/Baloons-site/'),
  ]
}
