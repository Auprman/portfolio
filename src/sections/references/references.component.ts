import { Component, HostListener, inject } from '@angular/core';
import { GlobalService } from '../../global.service';
import { Subscription } from 'rxjs';
import { ScrollFadeDirective } from '../../shared/scroll-fade.directive';


interface References{
  name: string ,
  project: string,
  referenceEn: string,
  referenceDe: string,
  link: string,
}

@Component({
  selector: 'app-references',
  imports: [ScrollFadeDirective],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})


export class ReferencesComponent {
  global = inject (GlobalService);

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

refs:References[] = [{
  name: 'Bartosz K.',
  project: 'Join',
  referenceEn: 'Working with Felix was a real pleasure. He was dedicated, reliable, and always open to collaboration. On top of his great team spirit, I especially appreciated the quality of his code – clean, well-structured, and thoughtfully written. It really made working together smooth and enjoyable.',
  referenceDe: 'Die Zusammenarbeit mit Felix hat mir echt Spaß gemacht. Er war engagiert, hat seine Aufgaben zuverlässig erledigt und war immer offen für Austausch. Besonders positiv ist mir neben seinem Teamgeist auch sein sauberer, gut strukturierter Code aufgefallen – durchdacht, nachvollziehbar und lösungsorientiert.',
  link: 'https://www.linkedin.com/in/bartosz-kuczek/?originalSubdomain=de',
  },
  {
  name: 'Mareike K.',
  project: 'El-Pollo-Loco',
  referenceEn: 'Lorem Englisch, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
  referenceDe: 'Lorem Deutsch, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
  link: '#why-me',},
  {
  name: 'Johannes K.',
  project: 'Join',
  referenceEn: 'Lorem Englisch, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
  referenceDe: 'Lorem Deutsch, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
  link: '#why-me',
}]



}
