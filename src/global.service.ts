import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PROJECTS, Project } from './app/project-data'; // Pfad ggf. anpassen


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {}

  /** Subject and observable to track if user is on mobile */
  private mobileSubject = new BehaviorSubject<boolean>(window.innerWidth < 1024);
  isMobile$ = this.mobileSubject.asObservable();

  /** Global UI & state flags */
  language: string = 'en';
  defaultLanguage: string = '';
  isMobile: boolean = false;
  isTransitioning = false;
  isTransitioningLanguage = false;
  hamActive: boolean = false;

  /** Name of the currently active project */
  activeProject: string = 'Join';

  /** All available project definitions */
  projects: Project[] = PROJECTS;

  /**
   * Returns the currently active project object.
   */
  get activeProjectData(): Project | undefined {
    return this.projects.find(project => project.projectname === this.activeProject);
  }

  /**
   * Sets a new active project with a transition animation.
   * @param projectName Name of the project to activate.
   */
  setActiveProject(projectName: string) {
    if (this.activeProject === projectName) return;
    this.isTransitioning = true;
    setTimeout(() => {
      this.activeProject = projectName;
      this.isTransitioning = false;
    }, 200);
  }

  /**
   * Checks if a given project name is currently active.
   * @param current The project name to check.
   */
  projectIsActive(current: string) {
    return this.activeProject === current;
  }

  /**
   * Updates the `isMobile` state based on the current window width.
   * Should be called on every resize.
   */
  onResize() {
    const isNowMobile = window.innerWidth < 1028;
    this.isMobile = isNowMobile;
    this.mobileSubject.next(isNowMobile);
  }

  /**
   * Triggers the transition effect when switching languages.
   * @param clickedLanguage The new language to switch to (optional).
   */
  switchLanguageAnimation(clickedLanguage?: string) {
    if (this.language === clickedLanguage) return;
    this.isTransitioningLanguage = true;
    setTimeout(() => {
      this.isTransitioningLanguage = false;
    }, 200);
  }

  /** Saves the chosen language to the local storage */
   saveCurrentLanguage(language: string) {
    this.language = language;
    localStorage.setItem('language', language);
    console.log('Language saved:', language);
    
   }

   /** Loads the saved language from local storage or sets the default language */
   setSavedLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.language = savedLanguage;
    } else {
      this.language = this.defaultLanguage;
    } 
    }
}