import { Component, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';


interface Project {
  projectname: string,
  aboutEn: string,
  aboutDe: string,
  durationEn: string,
  durationDe: string,  
  organizationEn: string,
  organizationDe: string,
  experienceEn: string,
  experienceDe: string
}
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})



export class ProjectsComponent {

  activeProject: string = 'Join'
  
  global = inject(GlobalService)
 
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
    
  },
  {
    projectname: 'Ongoing',
    aboutEn: 'A task manager inspired by the Kanban method. Easily create, organize, and move tasks with drag and drop, and assign users and categories seamlessly.',
    aboutDe: 'Ein Taskmanager zur effizienten Organisation von Aufgaben auf Basis des Kanban-Systems – mit der Möglichkeit, Aufgaben per Drag & Drop flexibel Nutzern und Kategorien zuzuweisen.',
    durationEn: '2 months',
    durationDe: '2 Monate',
    organizationEn: 'We kept our project organized with a Trello Kanban board, splitting tasks and tracking To-Dos as a team. To keep the code clean and maintainable, we built reusable components, used clear naming everywhere, and made sure everything was well-documented.',
    organizationDe: 'Wir haben unser Projekt mit einem Trello-Kanban-Board organisiert, Aufgaben aufgeteilt und gemeinsam To-Dos abgearbeitet. Damit der Code sauber und wartbar bleibt, haben wir auf wiederverwendbare Komponenten, klare Namen und gute Dokumentation gesetzt.',
    experienceEn: 'We were a team of three, and I focused on everything related to creating contacts and linking them to tasks. We supported each other throughout the project, which made working together a lot of fun. We built the app using JavaScript, HTML, CSS, and Google Firebase.',
    experienceDe: 'Wir waren ein Team von drei Leuten, und ich habe mich um alles rund um die Erstellung von Kontakten und deren Verknüpfung mit Aufgaben gekümmert. Durch die enge Zusammenarbeit haben wir uns immer gegenseitig unterstützt – das hat das Projekt besonders spannend und spaßig gemacht. Umgesetzt haben wir das Ganze mit JavaScript, HTML, CSS und Google Firebase.',
    
  },]

setActiveProject(projectName:string){
  this.activeProject = projectName;
}

get activeProjectData(): Project | undefined {
  return this.projects.find(project => project.projectname === this.activeProject);
}

ngOnInit(){
  console.log(this.global.language);
  
}
}
