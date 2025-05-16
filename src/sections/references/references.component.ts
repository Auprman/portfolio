import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from '../../global.service';
import { ScrollFadeDirective } from '../../shared/scroll-fade.directive';

interface References {
  name: string;
  project: string;
  referenceEn: string;
  referenceDe: string;
  link: string;
}

@Component({
  selector: 'app-references',
  imports: [ScrollFadeDirective],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  /** Access to global application state like language and responsiveness */
  global = inject(GlobalService);

  /** Indicates if the current viewport is mobile-sized */
  isMobile = false;

  /** Subscription to observe screen size changes */
  private subscription!: Subscription;

  /**
   * Lifecycle hook that runs after component initialization.
   * Subscribes to screen size observable to keep track of mobile state.
   */
  ngOnInit() {
    this.isMobile = this.global.isMobile;
    this.subscription = this.global.isMobile$.subscribe(value => {
      this.isMobile = value;
    });
  }

  /**
   * Lifecycle hook that runs before the component is destroyed.
   * Unsubscribes from observables to avoid memory leaks.
   */
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  /**
   * List of professional references with multilingual support and links.
   */
  refs: References[] = [
    {
      name: 'Bartosz K.',
      project: 'Join',
      referenceEn:
        'Working with Felix was a real pleasure. He was dedicated, reliable, and always open to collaboration. On top of his great team spirit, I especially appreciated the quality of his code – clean, well-structured, and thoughtfully written. It really made working together smooth and enjoyable.',
      referenceDe:
        'Die Zusammenarbeit mit Felix hat mir echt Spaß gemacht. Er war engagiert, hat seine Aufgaben zuverlässig erledigt und war immer offen für Austausch. Besonders positiv ist mir neben seinem Teamgeist auch sein sauberer, gut strukturierter Code aufgefallen – durchdacht, nachvollziehbar und lösungsorientiert.',
      link: 'https://www.linkedin.com/in/bartosz-kuczek/?originalSubdomain=de',
    },
    {
      name: 'Mareike K.',
      project: 'El-Pollo-Loco',
      referenceEn:
        'Lorem Englisch, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
      referenceDe:
        'Lorem Deutsch, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
      link: '#why-me',
    },
    {
      name: 'Johannes K.',
      project: 'Join',
      referenceEn:
        'Lorem Englisch, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
      referenceDe:
        'Lorem Deutsch, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
      link: '#why-me',
    }
  ];
}
