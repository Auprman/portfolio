import { Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-navbar-mobile',
  imports: [CommonModule],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {

  isFixed = false;
  global = inject(GlobalService)

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

  constructor(private elRef: ElementRef) {}

  activeLink: string = '';
  activeLinkLanguage: string = 'en';

  setActive(linkName: string) {
    this.activeLink = linkName; 
    console.log('activeLink', this.activeLink);
       
  }

  setActiveLanguage(linkName: string){
    this.global.switchLanguageAnimation(linkName);
    this.activeLinkLanguage = linkName;
    this.global.language = linkName;
  }
  

}
