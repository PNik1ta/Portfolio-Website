import { DomSanitizer } from "@angular/platform-browser";
import { TechnologyGroup } from "../models/technology-group.model";
import { Technology } from "../models/technology.model";

export function configureTechnologyGroups(sanitizer: DomSanitizer, gitUrl: string): TechnologyGroup[] {
  return [
    new TechnologyGroup('Frontend', [
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/angular-icon.svg`), 'Angular', "Angular is a TypeScript-based, free and open-source web application framework developed by the Angular Team at Google and by a community of individuals and corporations.", "Go to angular website", "https://angular.io/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/react-icon.svg`), 'React', "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.", "Go to react website", "https://react.dev/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/blazor-icon.png`), 'Blazor', "Blazor is a free and open-source web framework that enables developers to create web apps using C# and HTML. It is being developed by Microsoft.", "Go to blazor website", "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/sass-icon.svg`), 'SCSS', "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.", "Go to sass website", "https://sass-lang.com/"),
    ]),

    new TechnologyGroup('Backend', [
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/nestjs-icon.png`), 'NestJS', "A progressive Node.js framework for building efficient,reliable and scalable server-side applications.", "Go to NestJS website", "https://nestjs.com/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/asp-icon.png`), 'ASP .NET Core', "ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-enabled, Internet-connected apps.", "Go to Go to ASP .NET Core website", "https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-7.0")
    ]),

    new TechnologyGroup('Databases', [
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/mongo-icon.png`), 'MongoDB', "The developer data platform that provides the services and tools necessary to build distributed applications fast, at the performance and scale users demand.", "Go to MongoDB website", "https://www.mongodb.com/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/mysql-icon.svg`), 'MySQL', "MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses.", "Go to MySQL website", "https://www.mysql.com/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/postgresql-icon.png`), 'PostgreSQL', "PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.", "Go to PostgreSQL website", "https://www.postgresql.org/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/elastic-icon.png`), 'Elastic Search', "Elastic offers industry-leading data security and observability solutions that help teams gain full visibility and protect their valuable data.", "Go to Elastic Search website", "https://www.elastic.co/"),
    ]),

    new TechnologyGroup('DevOps', [
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/docker-icon.svg`), 'Docker', "Docker is a software platform that allows you to build, test, and deploy applications quickly.", "Go to docker website", "https://www.docker.com/"),
    ]),

    new TechnologyGroup('Design', [
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/figma-icon.svg`), 'Figma', "Figma is a free design tool for teams who build products together. Born on the Web, Figma helps the entire product team create, test, and ship better designs", "Go to figma website", "https://www.figma.com/"),
    ]),
  ]
}
