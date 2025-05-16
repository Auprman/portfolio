import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-burgermenu',
  imports: [CommonModule, LogoComponent],
  templateUrl: './burgermenu.component.html',
  styleUrl: './burgermenu.component.scss'
})
export class BurgermenuComponent {

  /** Injected global service to access shared app state */
  global = inject(GlobalService);

  /** Offset from the top where the navbar becomes fixed */
  navbarTopOffset = 0;

  /** Indicates whether the navbar should be fixed during scroll */
  isFixed = false;

  /**
   * Constructor injecting the element reference of the host component.
   * @param elRef Reference to the component's native DOM element.
   */
  constructor(private elRef: ElementRef) {}

  /**
   * Toggles the visibility of the mobile hamburger menu.
   */
  showMenu() {
    this.global.hamActive = !this.global.hamActive;
  }

  /**
   * Listens to the window scroll event and updates the `isFixed` state.
   * Makes the navbar fixed if the scroll position passes a threshold.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.elRef.nativeElement.querySelector('nav');
    const navbarHeight = navbar.offsetHeight;

    this.isFixed = window.scrollY >= (this.navbarTopOffset - navbarHeight);
  }
}
