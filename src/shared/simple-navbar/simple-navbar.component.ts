
import { Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-simple-navbar',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './simple-navbar.component.html',
  styleUrls: ['./simple-navbar.component.scss']
})
export class SimpleNavbarComponent implements OnInit {

  /** Whether the navbar should be fixed to the top on scroll */
  isFixed = true;

  /** Stores the initial top offset of the navbar */
  navbarTopOffset = 0;

  /** Access to global state (e.g. language, hamburger menu) */
  global = inject(GlobalService);

  /** Name of the currently active navigation link */
  activeLink: string = '';

  /** Currently selected language in the navbar */
  activeLinkLanguage: string = this.global.language;

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
    this.global.saveCurrentLanguage(linkName);
  }

  /**
   * Lifecycle hook that runs after the component has been initialized.
   * Stores the top offset of the navbar for scroll-based behavior.
   */
  ngOnInit(): void {
    const navbar = this.elRef.nativeElement.querySelector('nav');
    this.navbarTopOffset = navbar.offsetTop;
  }

}
