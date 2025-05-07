import { Component, HostListener, inject } from '@angular/core';
import { LogoComponent } from "../../shared/logo/logo.component";
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../global.service';
import { NavbarMobileComponent } from '../navbar-mobile/navbar-mobile.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-atf',
  imports: [LogoComponent, CommonModule, NavbarMobileComponent],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {

  global = inject(GlobalService);

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



}
