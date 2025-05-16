import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from '../../global.service';
import { ScrollFadeDirective } from '../../shared/scroll-fade.directive';

/**
 * Interface representing a bilingual description text.
 */
interface Description {
  descriptionEn: string;
  descriptionDe: string;
}

@Component({
  selector: 'app-why-me',
  imports: [ScrollFadeDirective],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent implements OnInit, OnDestroy {

  /** Access to global state (e.g. language, responsiveness) */
  global = inject(GlobalService);

  /** Indicates if the current screen is mobile-sized */
  isMobile = false;

  /** Subscription to observe screen size changes */
  private subscription!: Subscription;

  /**
   * Lifecycle hook that runs after component initialization.
   * Subscribes to the global isMobile$ observable to respond to viewport changes.
   */
  ngOnInit() {
    this.isMobile = this.global.isMobile;
    this.subscription = this.global.isMobile$.subscribe(value => {
      this.isMobile = value;
    });
  }

  /**
   * Lifecycle hook that runs before the component is destroyed.
   * Cleans up the subscription to avoid memory leaks.
   */
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  /**
   * Description of personal motivation and mindset (bilingual).
   */
  des: Description = {
    descriptionEn:
      'Coding means endless learning and creativity for me. I love diving into new challenges, finding smart solutions, and seeing how even the toughest problems can be cracked with the right idea. Whether it’s building something from scratch or working with clear guidelines — both spark my passion.',
    descriptionDe:
      'Programmieren bedeutet für mich ständiges Lernen und kreative Freiheit. Ich liebe es, mich neuen Herausforderungen zu stellen, clevere Lösungen zu finden und zu sehen, wie selbst komplizierte Probleme mit der richtigen Idee lösbar sind. Egal ob ich frei gestalte oder nach festen Vorgaben arbeite – beides begeistert mich. Programmieren ist für mich mehr als nur Code – es ist eine Art zu denken, neugierig zu bleiben und mit jedem Projekt weiterzuwachsen.'
  };
}
