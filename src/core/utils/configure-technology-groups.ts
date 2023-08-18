import { DomSanitizer } from "@angular/platform-browser";
import { TechnologyGroup } from "../models/technology-group.model";
import { Technology } from "../models/technology.model";

export function configureTechnologyGroups(sanitizer: DomSanitizer, gitUrl: string): TechnologyGroup[] {
  return [
    new TechnologyGroup('Frontend', [
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/angular-icon.svg`), 'Angular', "Angular — это бесплатная платформа веб-приложений с открытым исходным кодом на основе TypeScript, разработанная командой Angular в Google и сообществом отдельных лиц и корпораций.", "Перейти на сайт Angular", "https://angular.io/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/react-icon.svg`), 'React', "React — это бесплатная внешняя библиотека JavaScript с открытым исходным кодом для создания пользовательских интерфейсов на основе компонентов. Он поддерживается Meta (ранее Facebook) и сообществом отдельных разработчиков и компаний.", "Перейти на сайт React", "https://react.dev/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/blazor-icon.png`), 'Blazor', "Blazor — это бесплатная веб-платформа с открытым исходным кодом, которая позволяет разработчикам создавать веб-приложения с использованием C# и HTML. Его разрабатывает Microsoft.", "Перейти на сайт Blazor", "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/sass-icon.svg`), 'SCSS', "Sass — самый зрелый, стабильный и мощный язык расширений CSS в мире.", "Перейти на сайт SASS", "https://sass-lang.com/"),
    ]),

    new TechnologyGroup('Backend', [
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/nestjs-icon.png`), 'NestJS', "Прогрессивная платформа Node.js для создания эффективных, надежных и масштабируемых серверных приложений.", "Перейти на сайт NestJS", "https://nestjs.com/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/asp-icon.png`), 'ASP .NET Core', "ASP.NET Core — это кроссплатформенная высокопроизводительная платформа с открытым исходным кодом для создания современных облачных приложений.", "Перейти на сайт ASP .NET Core", "https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-7.0")
    ]),

    new TechnologyGroup('Databases', [
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/mongo-icon.png`), 'MongoDB', "Платформа данных для разработчиков, предоставляющая услуги и инструменты, необходимые для быстрого создания распределенных приложений с требуемой производительностью и масштабируемостью..", "Перейти на сайт MongoDB", "https://www.mongodb.com/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/mysql-icon.svg`), 'MySQL', "MySQL является бесплатным программным обеспечением с открытым исходным кодом в соответствии с условиями Стандартной общественной лицензии GNU.", "Перейти на сайт MySQL", "https://www.mysql.com/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/postgresql-icon.png`), 'PostgreSQL', "PostgreSQL — это мощная система объектно-реляционных баз данных с открытым исходным кодом, которая использует и расширяет язык SQL в сочетании со многими функциями, позволяющими безопасно хранить и масштабировать самые сложные рабочие нагрузки данных.", "Перейти на сайт PostgreSQL", "https://www.postgresql.org/"),
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/elastic-icon.png`), 'Elastic Search', "Elastic предлагает лучшие в отрасли решения для обеспечения безопасности и наблюдения за данными, которые помогают командам получить полную информацию и быстрый текстовой поиск.", "Перейти на сайт Elastic Search", "https://www.elastic.co/"),
    ]),

    new TechnologyGroup('DevOps', [
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/docker-icon.svg`), 'Docker', "Docker — это программная платформа, позволяющая быстро создавать, тестировать и развертывать приложения.", "Перейти на сайт Docker", "https://www.docker.com/"),
    ]),

    new TechnologyGroup('Design', [
      new Technology(sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/technologies/figma-icon.svg`), 'Figma', "Figma — это бесплатный инструмент дизайна для команд, которые вместе создают продукты. Figma помогает всей команде разработчиков создавать, тестировать и поставлять лучшие проекты.", "Перейти на сайт Figma", "https://www.figma.com/"),
    ]),
  ]
}
