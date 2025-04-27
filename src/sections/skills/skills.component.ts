import { Component } from '@angular/core';

interface Skill {
  name: string;
  path: string;
} 
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  
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
