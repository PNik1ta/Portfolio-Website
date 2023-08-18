import { DomSanitizer } from "@angular/platform-browser"
import { DirectionType } from "../enums/direction-type.enum"
import { Direction } from "../models/direction.model"

export function configureDirections(sanitizer: DomSanitizer, gitUrl: string): Direction[] {
  return [
    new Direction('Frontend', 'В качестве Frontend технологии я использую Angular в 80% случаев', sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/frontend.svg`), DirectionType.FRONTEND),
    new Direction('Backend', "Я использую микросервисы в больших проектах, kibana + elastic search стек для логгирования и grafana для отслеживания http запросов", sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/backend.svg`), DirectionType.BACKEND),
    new Direction('DevOps', "Я использую Docker для хранения приложения на сервере и docker swarm для распределения нагрузки по серверам", sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/devops.svg`), DirectionType.DEVOPS),
    new Direction('Design', "Я использую Figma для верстки сайтов по макетам", sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/figma.svg`), DirectionType.DESIGN),
  ]
}
