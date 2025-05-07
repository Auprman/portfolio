import { Component, HostListener, inject } from '@angular/core';
import { GlobalService } from '../../global.service';
import { Subscription } from 'rxjs';

interface References{
  name: string ,
  project: string,
  referenceEn: string,
  referenceDe: string,
  link: string,
}

@Component({
  selector: 'app-references',
  imports: [],
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
  referenceEn: 'Lorem Englischum, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
  referenceDe: 'Lorem Deutschum, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
  link: '#why-me',
  },
  {
  name: 'Mareike K.',
  project: 'El-Pollo-Loco',
  referenceEn: 'Lorem Englischum, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
  referenceDe: 'Lorem Deutschum, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
  link: '#why-me',},
  {
  name: 'Johannes K.',
  project: 'Join',
  referenceEn: 'Lorem Englischum, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
  referenceDe: 'Lorem Deutschum, dolor sit amet consectetur adipisicing elit. Adipisci a quis deserunt dolor nisi quos vero aperiam, rerum officiis quaerat autem, ipsa odit omnis earum non, nam porro praesentium quo enim qui necessitatibus fugiat. Incidunt ullam ducimus deserunt pariatur qui.',
  link: '#why-me',
}]



}
