import { Component, HostListener, inject } from '@angular/core';
import { GlobalService } from '../../global.service';

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

  isMobile:boolean = false;

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

@HostListener('window:resize', ['$event'])
onResize(event: Event) {
  this.isMobile = window.innerWidth < 1024;
}

ngOnInit() {
  this.isMobile = window.innerWidth < 1024;
}

}
