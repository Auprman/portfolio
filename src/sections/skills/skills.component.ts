import { Component, inject } from '@angular/core';
import { GlobalService } from '../../global.service';
import { ScrollFadeDirective } from '../../shared/scroll-fade.directive';


interface Skill {
  name: string;
  path: string; 
} 
@Component({
  selector: 'app-skills',
  imports: [ScrollFadeDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  global = inject(GlobalService);
  descriptionDe:string = 'Ich bin stets motiviert, meine Fähigkeiten weiterzuentwickeln, neue Ideen auszuprobieren und mich mit aktuellen Technologien auseinanderzusetzen. Dabei ist es mir wichtig, kreative und durchdachte Lösungen zu finden, die über den Standard hinausgehen.';
  descriptionEn:string = 'Im always eager to level up my skills, try out new ideas, and stay in the loop with the latest tech. For me, it’s all about finding smarter ways to solve problems and pushing boundaries with fresh, creative solutions.';
  
  skills: Skill[] = [{
    name: 'Angular',
    path: '/assets/img/icons-skills/angular.svg'
  },{
    name: 'CSS',
    path: '/assets/img/icons-skills/css.svg'
  },{
    name: 'Firebase',
    path: '/assets/img/icons-skills/firebase.svg'
  },{
    name: 'Git',
    path: '/assets/img/icons-skills/git.svg'
  },{
    name: 'HTML',
    path: '/assets/img/icons-skills/html.svg'
  },{
    name: 'Javascript',
    path: '/assets/img/icons-skills/js.svg'
  },{
    name: 'Material Design',
    path: '/assets/img/icons-skills/material.svg'
  },{
    name: 'REST',
    path: '/assets/img/icons-skills/rest.svg'
  },{
    name: 'Scrum',
    path: '/assets/img/icons-skills/scrum.svg'
  },{
    name: 'Typescript',
    path: '/assets/img/icons-skills/ts.svg'
  }]

  currentlyLearning: Array<Skill> = [
    this.skills[0],
    this.skills[9]
  ]
}
