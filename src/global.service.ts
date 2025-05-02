import { Injectable } from '@angular/core';


interface Project {
  projectname: string,
  aboutEn: string,
  aboutDe: string,
  durationEn: string,
  durationDe: string,  
  organizationEn: string,
  organizationDe: string,
  experienceEn: string,
  experienceDe: string,
  imgScreenshot: string,
  gifProject: string,
  usedTechnologies: string[],
  headlinesEn: string[],
  headlinesDe: string[],
}
@Injectable({
  providedIn: 'root'
})


export class GlobalService {

    constructor() { }

  language:string = 'en';
  isTransitioning = false;
  activeProject: string = 'Join';
  hamActive:boolean = false;

  
get activeProjectData(): Project | undefined {
  return this.projects.find(project => project.projectname === this.activeProject);
}

  setActiveProject(projectName: string) {
    if (this.activeProject === projectName) return;
    this.isTransitioning = true;
    setTimeout(() => {
      this.activeProject = projectName;
      this.isTransitioning = false;      
    }, 200); 
    
  }

  projects:Project[] = [{
    projectname: 'Join',
    aboutEn: 'A task manager inspired by the Kanban method. Easily create, organize, and move tasks with drag and drop, and assign users and categories seamlessly.',
    aboutDe: 'Ein Taskmanager zur effizienten Organisation von Aufgaben auf Basis des Kanban-Systems – mit der Möglichkeit, Aufgaben per Drag & Drop flexibel Nutzern und Kategorien zuzuweisen.',
    durationEn: '2 months',
    durationDe: '2 Monate',
    organizationEn: 'We kept our project organized with a Trello Kanban board, splitting tasks and tracking To-Dos as a team. To keep the code clean and maintainable, we built reusable components, used clear naming everywhere, and made sure everything was well-documented.',
    organizationDe: 'Wir haben unser Projekt mit einem Trello-Kanban-Board organisiert, Aufgaben aufgeteilt und gemeinsam To-Dos abgearbeitet. Damit der Code sauber und wartbar bleibt, haben wir auf wiederverwendbare Komponenten, klare Namen und gute Dokumentation gesetzt.',
    experienceEn: 'We were a team of three, and I focused on everything related to creating contacts and linking them to tasks. We supported each other throughout the project, which made working together a lot of fun. We built the app using JavaScript, HTML, CSS, and Google Firebase.',
    experienceDe: 'Wir waren ein Team von drei Leuten, und ich habe mich um alles rund um die Erstellung von Kontakten und deren Verknüpfung mit Aufgaben gekümmert. Durch die enge Zusammenarbeit haben wir uns immer gegenseitig unterstützt – das hat das Projekt besonders spannend und spaßig gemacht. Umgesetzt haben wir das Ganze mit JavaScript, HTML, CSS und Google Firebase.',
    imgScreenshot: '/assets/img/bg-img/project-screenshots/join.png',
    gifProject: '/assets/img/bg-img/join.webp',
    usedTechnologies: ['js', 'css', 'html', 'firebase'],
    headlinesEn:['About the project','How I have organised my work process','My group work experience'],
    headlinesDe:['Über das Projekt','Meine Organisation des Arbeitsprozesses','Meine Erfahrung in der Teamarbeit'],

  },
  {
    projectname: 'El Pollo Loco',
    aboutEn: 'A task manager inspired by the Kanban method. Easily create, organize, and move tasks with drag and drop, and assign users and categories seamlessly.',
    aboutDe: 'Ein Taskmanager zur effizienten Organisation von Aufgaben auf Basis des Kanban-Systems – mit der Möglichkeit, Aufgaben per Drag & Drop flexibel Nutzern und Kategorien zuzuweisen.',
    durationEn: '6 weeks',
    durationDe: '6 Wochen',
    organizationEn: 'We kept our project organized with a Trello Kanban board, splitting tasks and tracking To-Dos as a team. To keep the code clean and maintainable, we built reusable components, used clear naming everywhere, and made sure everything was well-documented.',
    organizationDe: 'Wir haben unser Projekt mit einem Trello-Kanban-Board organisiert, Aufgaben aufgeteilt und gemeinsam To-Dos abgearbeitet. Damit der Code sauber und wartbar bleibt, haben wir auf wiederverwendbare Komponenten, klare Namen und gute Dokumentation gesetzt.',
    experienceEn: 'We were a team of three, and I focused on everything related to creating contacts and linking them to tasks. We supported each other throughout the project, which made working together a lot of fun. We built the app using JavaScript, HTML, CSS, and Google Firebase.',
    experienceDe: 'Wir waren ein Team von drei Leuten, und ich habe mich um alles rund um die Erstellung von Kontakten und deren Verknüpfung mit Aufgaben gekümmert. Durch die enge Zusammenarbeit haben wir uns immer gegenseitig unterstützt – das hat das Projekt besonders spannend und spaßig gemacht. Umgesetzt haben wir das Ganze mit JavaScript, HTML, CSS und Google Firebase.',
    imgScreenshot: '/assets/img/bg-img/project-screenshots/el-pollo-loco.png',
    gifProject: '/assets/img/bg-img/el-pollo-loco.webp',
    usedTechnologies: ['js', 'css', 'html'],
    headlinesEn:['About the project','How I have organised my work process','Workflow & Organization'],
    headlinesDe:['Über das Projekt','Meine Organisation des Arbeitsprozesses','Arbeitsweise & Organisation'],
  },
  {
    projectname: 'Pokedex',
    aboutEn: 'A task manager inspired by the Kanban method. Easily create, organize, and move tasks with drag and drop, and assign users and categories seamlessly.',
    aboutDe: 'Ein Taskmanager zur effizienten Organisation von Aufgaben auf Basis des Kanban-Systems – mit der Möglichkeit, Aufgaben per Drag & Drop flexibel Nutzern und Kategorien zuzuweisen.',
    durationEn: '1 month',
    durationDe: '1 Monat',
    organizationEn: 'We kept our project organized with a Trello Kanban board, splitting tasks and tracking To-Dos as a team. To keep the code clean and maintainable, we built reusable components, used clear naming everywhere, and made sure everything was well-documented.',
    organizationDe: 'Wir haben unser Projekt mit einem Trello-Kanban-Board organisiert, Aufgaben aufgeteilt und gemeinsam To-Dos abgearbeitet. Damit der Code sauber und wartbar bleibt, haben wir auf wiederverwendbare Komponenten, klare Namen und gute Dokumentation gesetzt.',
    experienceEn: 'We were a team of three, and I focused on everything related to creating contacts and linking them to tasks. We supported each other throughout the project, which made working together a lot of fun. We built the app using JavaScript, HTML, CSS, and Google Firebase.',
    experienceDe: 'Wir waren ein Team von drei Leuten, und ich habe mich um alles rund um die Erstellung von Kontakten und deren Verknüpfung mit Aufgaben gekümmert. Durch die enge Zusammenarbeit haben wir uns immer gegenseitig unterstützt – das hat das Projekt besonders spannend und spaßig gemacht. Umgesetzt haben wir das Ganze mit JavaScript, HTML, CSS und Google Firebase.',
    imgScreenshot: '/assets/img/bg-img/project-screenshots/pokedex-screenshot.png',
    gifProject: '/assets/img/bg-img/pokedex.webp',
    usedTechnologies: ['js', 'css', 'html','rest'],
    headlinesEn:['About the project','How I have organised my work process','Workflow & Organization'],
    headlinesDe:['Über das Projekt','Meine Organisation des Arbeitsprozesses','Arbeitsweise & Organisation'],
  },
  {
    projectname: 'Ongoing',
    aboutEn: 'A task manager inspired by the Kanban method. Easily create, organize, and move tasks with drag and drop, and assign users and categories seamlessly.',
    aboutDe: 'Ein Taskmanager zur effizienten Organisation von Aufgaben auf Basis des Kanban-Systems – mit der Möglichkeit, Aufgaben per Drag & Drop flexibel Nutzern und Kategorien zuzuweisen.',
    durationEn: 'In progress',
    durationDe: 'In Bearbeitung',
    organizationEn: 'We kept our project organized with a Trello Kanban board, splitting tasks and tracking To-Dos as a team. To keep the code clean and maintainable, we built reusable components, used clear naming everywhere, and made sure everything was well-documented.',
    organizationDe: 'Wir haben unser Projekt mit einem Trello-Kanban-Board organisiert, Aufgaben aufgeteilt und gemeinsam To-Dos abgearbeitet. Damit der Code sauber und wartbar bleibt, haben wir auf wiederverwendbare Komponenten, klare Namen und gute Dokumentation gesetzt.',
    experienceEn: 'We were a team of three, and I focused on everything related to creating contacts and linking them to tasks. We supported each other throughout the project, which made working together a lot of fun. We built the app using JavaScript, HTML, CSS, and Google Firebase.',
    experienceDe: 'Wir waren ein Team von drei Leuten, und ich habe mich um alles rund um die Erstellung von Kontakten und deren Verknüpfung mit Aufgaben gekümmert. Durch die enge Zusammenarbeit haben wir uns immer gegenseitig unterstützt – das hat das Projekt besonders spannend und spaßig gemacht. Umgesetzt haben wir das Ganze mit JavaScript, HTML, CSS und Google Firebase.',
    imgScreenshot: '/assets/img/bg-img/screenshot-coming-soon.png',
    gifProject: '/assets/img/bg-img/join.webp',
    usedTechnologies: ['angular', 'html','css','firebase'],
    headlinesEn:['About the project','How I have organised my work process','My group work experience'],
    headlinesDe:['Über das Projekt','Meine Organisation des Arbeitsprozesses','Arbeitsweise & Organisation'],
  },]


}
