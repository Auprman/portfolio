import { Component, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-navbar-mobile',
  imports: [CommonModule],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {

  /** Whether the navbar should be fixed (unused in current logic) */
  isFixed = false;

  /** Global service for shared state like language and responsiveness */
  global = inject(GlobalService);

  /** Indicates if the current screen is mobile-sized */
  isMobile = false;

  /** Active link in the navigation */
  activeLink: string = '';

  /** Active language link */
  activeLinkLanguage: string = 'en';

  /** Subscription to track mobile view changes */
  private subscription!: Subscription;

  /**
   * Constructor injecting element reference.
   * @param elRef Reference to the component's host element.
   */
  constructor(private elRef: ElementRef) {}

  /**
   * Lifecycle hook called after component initialization.
   * Subscribes to the isMobile$ observable to react to screen size changes.
   */
  ngOnInit() {
    this.isMobile = this.global.isMobile;
    this.subscription = this.global.isMobile$.subscribe(value => {
      this.isMobile = value;
    });
  }

  /**
   * Lifecycle hook called just before the component is destroyed.
   * Cleans up the subscription to avoid memory leaks.
   */
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  /**
   * Sets the currently active navigation link.
   * @param linkName The name of the link to activate.
   */
  setActive(linkName: string) {
    this.activeLink = linkName;
    console.log('activeLink', this.activeLink);
  }

  /**
   * Sets the current language and triggers the language change animation.
   * @param linkName The language code (e.g., 'en', 'de') to switch to.
   */
  setActiveLanguage(linkName: string) {
    this.global.switchLanguageAnimation(linkName);
    this.activeLinkLanguage = linkName;
    this.global.language = linkName;
  }

  /**
   * Toggles the visibility of the mobile menu (hamburger menu).
   */
  showMenu() {
    this.global.hamActive = !this.global.hamActive;
  }
}
