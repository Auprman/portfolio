import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from '../../global.service';
import { Subscription } from 'rxjs';
import { ScrollFadeDirective } from '../../shared/scroll-fade.directive';

interface Description{
  descriptionEn: string,
  descriptionDe: string,
}
@Component({
  selector: 'app-why-me',
  imports: [ScrollFadeDirective],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})


export class WhyMeComponent implements OnInit, OnDestroy {

global = inject(GlobalService);
isMobile = false;

private subscription!: Subscription;

ngOnInit() {
  this.isMobile = this.global.isMobile;
  this.subscription = this.global.isMobile$.subscribe(value => {
    this.isMobile = value;
  });
}

ngOnDestroy() {
  this.subscription?.unsubscribe();
}



des:Description = {
  descriptionEn: 'Coding means endless learning and creativity for me. I love diving into new challenges, finding smart solutions, and seeing how even the toughest problems can be cracked with the right idea. Whether its building something from scratch or working with clear guidelines — both spark my passion.',
  descriptionDe: 'Programmieren bedeutet für mich ständiges Lernen und kreative Freiheit. Ich liebe es, mich neuen Herausforderungen zu stellen, clevere Lösungen zu finden und zu sehen, wie selbst komplizierte Probleme mit der richtigen Idee lösbar sind. Egal ob ich frei gestalte oder nach festen Vorgaben arbeite – beides begeistert mich.Programmieren ist für mich mehr als nur Code – es ist eine Art zu denken, neugierig zu bleiben und mit jedem Projekt weiterzuwachsen.',
}
 


}
