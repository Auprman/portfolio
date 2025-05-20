import { Component, inject } from '@angular/core';
import { GlobalService } from '../../global.service';
import { ScrollFadeDirective } from '../../shared/scroll-fade.directive';
import { CommonModule } from '@angular/common';


/**
 * Interface representing a skill with a name and image path.
 */
interface Skill {
  name: string;
  path: string;
}

@Component({
  selector: 'app-skills',
  imports: [ScrollFadeDirective, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  /** Access to global application settings like language */
  global = inject(GlobalService);

  /** German description of skill development motivation */
  descriptionDe: string =
    'Ich bin stets motiviert, meine Fähigkeiten weiterzuentwickeln, neue Ideen auszuprobieren und mich mit aktuellen Technologien auseinanderzusetzen. Dabei ist es mir wichtig, kreative und durchdachte Lösungen zu finden, die über den Standard hinausgehen.';

  /** English description of skill development motivation */
  descriptionEn: string =
    'I’m always eager to level up my skills, try out new ideas, and stay in the loop with the latest tech. For me, it’s all about finding smarter ways to solve problems and pushing boundaries with fresh, creative solutions.';

  /**
   * List of technical skills with associated icons
   */
  skills: Skill[] = [
    { name: 'Angular', path: '/assets/img/icons-skills/angular.svg' },
    { name: 'CSS', path: '/assets/img/icons-skills/css.svg' },
    { name: 'Firebase', path: '/assets/img/icons-skills/firebase.svg' },
    { name: 'Git', path: '/assets/img/icons-skills/git.svg' },
    { name: 'HTML', path: '/assets/img/icons-skills/html.svg' },
    { name: 'JavaScript', path: '/assets/img/icons-skills/js.svg' },
    { name: 'Material Design', path: '/assets/img/icons-skills/material.svg' },
    { name: 'REST', path: '/assets/img/icons-skills/rest.svg' },
    { name: 'Scrum', path: '/assets/img/icons-skills/scrum.svg' },
    { name: 'TypeScript', path: '/assets/img/icons-skills/ts.svg' }
  ];

  /**
   * Subset of skills that are currently being learned or deepened
   */
  currentlyLearning: Skill[] = [
    this.skills[0], // Angular
    this.skills[9]  // Typescript
  ];
}
