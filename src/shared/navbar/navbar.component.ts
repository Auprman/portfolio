import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isFixed = false;
  navbarTopOffset = 0;

  constructor(private elRef: ElementRef) {}

  activeLink: string = '';
  activeLinkLanguage: string = 'de';

  setActive(linkName: string) {
    this.activeLink = linkName;
  }

  setActiveLanguage(linkName: string){
    this.activeLinkLanguage = linkName;
  }
  

  ngOnInit(): void {
    const navbar = this.elRef.nativeElement.querySelector('nav');
    this.navbarTopOffset = navbar.offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.elRef.nativeElement.querySelector('nav');
    const navbarHeight = navbar.offsetHeight;

    this.isFixed = window.scrollY >= (this.navbarTopOffset - navbarHeight);
}
}