import { DomSanitizer } from "@angular/platform-browser"
import { DirectionType } from "../enums/direction-type.enum"
import { Direction } from "../models/direction.model"

export function configureDirections(sanitizer: DomSanitizer, gitUrl: string): Direction[] {
  return [
    new Direction('Frontend', 'As a frontend technology i use Angular in 80% of my projects', sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/frontend.svg`), DirectionType.FRONTEND),
    new Direction('Backend', "I'm using microservice architecture in huge projects, kibana + elastic search stack to track logs and grafana to track http requests", sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/backend.svg`), DirectionType.BACKEND),
    new Direction('DevOps', "I'm using docker to store my application on the server and docker swarm to distribute the load on many servers", sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/devops.svg`), DirectionType.DEVOPS),
    new Direction('Design', "I'm using figma to create website depends on figma mockup", sanitizer.bypassSecurityTrustUrl(`${gitUrl}assets/icons/figma.svg`), DirectionType.DESIGN),
  ]
}
