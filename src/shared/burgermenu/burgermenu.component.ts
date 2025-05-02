import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-burgermenu',
  imports: [CommonModule, LogoComponent,],
  templateUrl: './burgermenu.component.html',
  styleUrl: './burgermenu.component.scss'
})
export class BurgermenuComponent {
  
  global= inject(GlobalService);
  navbarTopOffset = 0;
  isFixed = false;


  constructor(private elRef: ElementRef) {}

  showMenu(){
     this.global.hamActive = !this.global.hamActive    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.elRef.nativeElement.querySelector('nav');
    const navbarHeight = navbar.offsetHeight;

    this.isFixed = window.scrollY >= (this.navbarTopOffset - navbarHeight);
}

}
