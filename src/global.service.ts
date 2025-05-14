import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



interface Project {
  projectname: string,
  aboutEn: string,
  aboutDe: string,
  durationEn: string,
  durationDe: string,  
  organizationEn?: string,
  organizationDe?: string,
  experienceEn?: string,
  experienceDe?: string,
  imgScreenshot: string,
  gifProject: string,
  usedTechnologies: string[],
  technologiesSpelledOut: string[],
  headlinesEn: string[],
  headlinesDe: string[],
  linkLive: string,
  linkGithub: string,
  isSingleProject: boolean
}
@Injectable({
  providedIn: 'root'
})


export class GlobalService {

  constructor() {     
  }

  private mobileSubject = new BehaviorSubject<boolean>(window.innerWidth < 1024);
  
  isMobile$ = this.mobileSubject.asObservable();

  language:string = 'en';
  isTransitioning = false;
  activeProject: string = 'Join';
  hamActive:boolean = false;  
  isMobile:boolean = false;
  defaultLanguage:string = 'en';
  isTransitioningLanguage = false;


  

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


  projectIsActive(current:string){
    return this.activeProject === current;
  } 


  onResize() {
    const isNowMobile = window.innerWidth < 1024;
    this.isMobile = isNowMobile;
    this.mobileSubject.next(isNowMobile);
  }


  switchLanguageAnimation(clickedLanguage?: string) {
    if (this.language === clickedLanguage) return;
    this.isTransitioningLanguage = true;
    setTimeout(() => {
      this.isTransitioningLanguage = false;           
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
    technologiesSpelledOut: ['Javascript','CSS','HTML','Firebase'],
    headlinesEn:['About the project','How I have organized my work process','My group work experience'],
    headlinesDe:['Über das Projekt','Meine Organisation des Arbeitsprozesses','Meine Erfahrung in der Teamarbeit'],
    linkLive: './join/html/login.html',
    linkGithub: 'https://github.com/Auprman/da-join',
    isSingleProject: false  
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
    technologiesSpelledOut: ['Javascript','CSS','HTML'],
    headlinesEn:['About the project','How I have organized my work process','What i have learned'],
    headlinesDe:['Über das Projekt','Meine Organisation des Arbeitsprozesses','Was ich gelernt habe'],
    linkLive: './el-pollo-loco/',
    linkGithub: 'https://github.com/Auprman/El-pollo-loco',
    isSingleProject: true
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
    technologiesSpelledOut: ['Javascript','CSS', 'HTML', 'REST API'],
    headlinesEn:['About the project','How I have organized my work process','What i have learned'],
    headlinesDe:['Über das Projekt','Meine Organisation des Arbeitsprozesses','Was ich gelernt habe'],
    linkLive: './pokedex/',
    linkGithub: 'https://github.com/Auprman/pokeindex',
    isSingleProject: true
  },
  {
    projectname: 'Ongoing',
    aboutEn: 'In my upcoming project, I plan to develop a booking system for a psychological practice. Visitors will be able to choose from available time slots and book an appointment directly through the website. The goal is to make the process as simple and user-friendly as possible – for both the clients and the practice team, with particular attention to data privacy requirements.',
    aboutDe: 'In meinem nächsten Projekt möchte ich eine Terminbuchungslogik für eine psychotherapeutische Praxis umsetzen. Nutzerinnen sollen auf der Website aus verfügbaren Zeitfenstern einen passenden Termin auswählen und direkt buchen können. Ziel ist es, den Buchungsprozess so einfach und benutzerfreundlich wie möglich zu gestalten – für die Klientinnen ebenso wie für die Praxis, und das unter besonderer Berücksichtigung datenschutzrechtlicher Bedingungen.',
    durationEn: 'Future project',
    durationDe: 'Zukünftiges Projekt',
    experienceEn: 'I’ll organize the project in clear steps: First, I define the requirements, then I build the responsive frontend using Angular, TypeScript, and CSS. The appointment logic is handled via Firebase. With Git versioning, regular testing, and an iterative approach, I ensure a clean and secure implementation.',
    experienceDe: 'Das Projekt strukturiere ich in klare Schritte: Zuerst definiere ich die Anforderungen, danach entwickle ich das responsive Frontend mit Angular, TypeScript und CSS. Die Terminlogik setze ich mit Firebase um. Durch Git-Versionierung, regelmäßige Tests und Iterationen stelle ich eine saubere und sichere Umsetzung sicher.',
    imgScreenshot: '/assets/img/bg-img/screenshot-coming-soon.png',
    gifProject: '/assets/img/bg-img/join.webp',
    usedTechnologies: ['angular', 'html','css','firebase'],
    technologiesSpelledOut: ['Angular','HTML','CSS','Firebase'],
    headlinesEn:['About the project','How I want to organize my work process','Workflow & Organization'],
    headlinesDe:['Über das Projekt','Meine Organisation des Arbeitsprozesses','Arbeitsweise & Organisation'],
    linkLive: '',
    linkGithub: '',
    isSingleProject: true
  },]


}
