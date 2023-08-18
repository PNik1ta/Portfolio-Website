import { DomSanitizer } from "@angular/platform-browser";
import { Project } from "../models/project.model";

export function configureProjects(sanitizer: DomSanitizer, gitUrl: string): Project[] {
  return [
    new Project('Relvise', 'Сайт компании Relvise',sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/images/projects/relvise-project-image.png`), 'https://pnik1ta.github.io/Relvise/'),
    new Project('Baloons tourism', 'Сайт компании по воздушным турам, сделанный на русском языке', sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/images/projects/baloons-project-image.png`), 'https://pnik1ta.github.io/Baloons-site/'),
  ]
}
