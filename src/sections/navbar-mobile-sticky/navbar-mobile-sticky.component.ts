import { Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-navbar-mobile-sticky',
  imports: [CommonModule, LogoComponent],
  templateUrl: './navbar-mobile-sticky.component.html',
  styleUrl: './navbar-mobile-sticky.component.scss'
})
export class NavbarMobileStickyComponent {

  isFixed = false;
  global = inject(GlobalService);
  navbarTopOffset = 0;
  isMobile = false;

  private subscription!: Subscription;

  constructor(private elRef: ElementRef) {}

  /**
   * Lifecycle hook that initializes mobile state and navbar offset on component mount.
   */
  ngOnInit() {
    this.isMobile = this.global.isMobile;
    this.subscription = this.global.isMobile$.subscribe(value => {
      this.isMobile = value;
      const navbar = this.elRef.nativeElement.querySelector('nav');
      this.navbarTopOffset = navbar.offsetTop;
    });
  }

  
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  /** Currently active navigation link */
  activeLink: string = '';

  /** Currently active language ("en" or "de") */
  activeLinkLanguage: string = 'en';

  /**
   * Sets the active navigation link.
   * @param linkName The name of the link to set as active.
   */
  setActive(linkName: string) {
    this.activeLink = linkName;
  }

  /**
   * Switches the app language and triggers animation.
   * @param linkName Either "de" or "en".
   */
  setActiveLanguage(linkName: string) {
    this.global.switchLanguageAnimation(linkName);
    this.activeLinkLanguage = linkName;
    this.global.language = linkName;
  }

  /**
   * Listens to window scroll and shows/hides sticky nav based on 50% scroll height.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTriggerPercent = 0.5;
    const scrollTriggerY = window.innerHeight * scrollTriggerPercent;
    this.isFixed = window.scrollY >= scrollTriggerY;
  }

  /**
   * Toggles the mobile menu open/closed state.
   */
  showMenu() {
    this.global.hamActive = !this.global.hamActive;
  }

  /**
   * Closes the menu if the user clicks outside nav, dropdown, or any whitelisted toggle areas.
   * Prevents immediate close when clicking toggle or nav links.
   * @param event The mouse click event from the document.
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const navElement = this.elRef.nativeElement.querySelector('nav');
    const dropdownWrapper = this.elRef.nativeElement.querySelector('.dropdown-wrapper');
    const topbarToggle = document.querySelector('.ham-menu');
    const linksNavbar = document.querySelector('.left-section');

    const clickedInsideNav = navElement.contains(event.target as Node);
    const clickedInsideDropdown = dropdownWrapper.contains(event.target as Node);
    const clickedTopbarToggle = topbarToggle?.contains(event.target as Node);
    const clickInsideLinksNavbar = linksNavbar?.contains(event.target as Node);

    if (!clickedInsideNav && !clickedInsideDropdown && !clickedTopbarToggle && !clickInsideLinksNavbar && this.global.hamActive) {
      this.showMenu();
    }
  }
}
