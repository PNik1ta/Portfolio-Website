
import { Ability } from "../models/ability.model"

export function configureAbilities(): Ability[] {
  return [
    new Ability('Create landing page according to mockup', 'Create landing page according to mockup in Figma using by HTML & SCSS. I can create layout of any complexity with adaptive design and any browser support'),
    new Ability('Create backend side', 'Create backend side according to business requirements and using modern technologies. In big projects i use microservice architecture, modern technologies to tracking logs and http requests.'),
    new Ability('Create frontend side', 'Create frontend side using modern frameworks and connect frontend side to backend'),
    new Ability('Deploy to the server', 'Using docker to containerize application and deploy this docker container to the linux server and setting this server'),
  ]
}
