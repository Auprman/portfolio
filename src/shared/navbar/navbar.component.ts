import { Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  /** Whether the navbar should be fixed to the top on scroll */
  isFixed = false;

  /** Stores the initial top offset of the navbar */
  navbarTopOffset = 0;

  /** Access to global state (e.g. language, hamburger menu) */
  global = inject(GlobalService);

  /** Name of the currently active navigation link */
  activeLink: string = '';

  /** Currently selected language in the navbar */
  activeLinkLanguage: string = 'en';

  /**
   * Constructor injecting a reference to the DOM element of this component.
   * @param elRef Reference to the native host element.
   */
  constructor(private elRef: ElementRef) {}

  /**
   * Sets the currently active navigation link.
   * @param linkName The name of the link to activate.
   */
  setActive(linkName: string) {
    this.activeLink = linkName;
  }

  /**
   * Sets the currently selected language and triggers a language switch animation.
   * @param linkName The language code to activate (e.g. 'en', 'de').
   */
  setActiveLanguage(linkName: string) {
    this.global.switchLanguageAnimation(linkName);
    this.activeLinkLanguage = linkName;
    this.global.language = linkName;
  }

  /**
   * Lifecycle hook that runs after the component has been initialized.
   * Stores the top offset of the navbar for scroll-based behavior.
   */
  ngOnInit(): void {
    const navbar = this.elRef.nativeElement.querySelector('nav');
    this.navbarTopOffset = navbar.offsetTop;
  }

  /**
   * Listens for window scroll events and updates the `isFixed` state.
   * Fixes the navbar when the scroll position passes its original location.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.elRef.nativeElement.querySelector('nav');
    const navbarHeight = navbar.offsetHeight;
    this.isFixed = window.scrollY >= (this.navbarTopOffset - navbarHeight);
  }
}
