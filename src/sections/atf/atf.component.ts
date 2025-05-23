import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { LogoComponent } from '../../shared/logo/logo.component';
import { NavbarMobileComponent } from '../navbar-mobile/navbar-mobile.component';
import { GlobalService } from '../../global.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-atf',
  imports: [LogoComponent, CommonModule, NavbarMobileComponent, RouterLink],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {

  global = inject(GlobalService);
  isMobile = false;

  /** Subscription to keep track of viewport changes */
  private subscription!: Subscription;

  /**
   * Lifecycle hook that runs after component initialization.
   * Subscribes to isMobile$ to respond to screen size changes.
   */
  ngOnInit() {
    this.isMobile = this.global.isMobile;
    this.subscription = this.global.isMobile$.subscribe(value => {
      this.isMobile = value;
    });
  }

  /**
   * Lifecycle hook that runs just before the component is destroyed.
   * Unsubscribes from the observable to prevent memory leaks.
   */
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
