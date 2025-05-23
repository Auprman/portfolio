import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from '../../global.service';
import { ScrollFadeDirective } from '../../shared/scroll-fade.directive';

interface References {
  name: string;
  project: string;
  referenceEn: string;
  referenceDe: string;
  link?: string;
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
      name: 'Bartosz Kuczek',
      project: 'Join',
      referenceEn:
        'Working with Felix was a real pleasure. He was dedicated, reliable, and always open to collaboration. On top of his great team spirit, I especially appreciated the quality of his code – clean, well-structured, and thoughtfully written. It really made working together smooth and enjoyable.',
      referenceDe:
        'Die Zusammenarbeit mit Felix hat mir echt Spaß gemacht. Er war engagiert, hat seine Aufgaben zuverlässig erledigt und war immer offen für Austausch. Besonders positiv ist mir neben seinem Teamgeist auch sein sauberer, gut strukturierter Code aufgefallen – durchdacht, nachvollziehbar und lösungsorientiert.',
      link: 'https://www.linkedin.com/in/bartosz-kuczek/?originalSubdomain=de',
    },
    {
      name: 'Mareike Karl',
      project: 'Join',
      referenceEn:
        "I tested one of Felix’s projects and was genuinely impressed. I know him personally and can say he’s reliable, precise, and highly motivated. The application was well-structured and showed great attention to detail. He quickly gets into new topics, which was clear in his work. I'm looking forward to our upcoming collaboration.",
      
      referenceDe:
        'Ich habe eines von Felix’ Projekten getestet und war wirklich beeindruckt. Ich kenne ihn persönlich und weiß, dass er zuverlässig, genau und sehr motiviert ist. Die Anwendung war klar strukturiert und mit viel Liebe zum Detail umgesetzt. Er arbeitet sich schnell in neue Themen ein – das hat man seinem Projekt deutlich angemerkt. Ich freue mich auf unsere Zusammenarbeit.',


      link: 'https://www.linkedin.com/in/mareike-karl/',
    },
    {
      name: 'Kerstin K.',
      project: 'El-Pollo-Loco',
      referenceEn:
        'I tested Felix’s Pokédex project and was genuinely impressed by his work. He puts great emphasis on detail and appealing design – and it clearly shows. What stood out to me were his creative ideas and his openness to feedback, which he consistently turned into thoughtful and well-executed improvements. It’s clear that quality truly matters to him.',


      referenceDe:
        'Ich habe Felix’ Pokédex-Projekt getestet und war sehr angetan von seiner Arbeit. Er legt großen Wert auf Details und ein ansprechendes Design – und das merkt man sofort. Besonders gefallen haben mir seine kreativen Ideen sowie die Bereitschaft, Feedback offen anzunehmen und Änderungen schnell und sauber umzusetzen. Man spürt, dass ihm Qualität wirklich am Herzen liegt.',
      
    }
  ];
}
