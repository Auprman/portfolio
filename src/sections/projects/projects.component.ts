import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { GlobalService } from '../../global.service';
import { ScrollFadeDirective } from '../../shared/scroll-fade.directive';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ScrollFadeDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  /** Access to global settings such as language and responsiveness */
  global = inject(GlobalService);

  /** Whether any project element is currently being hovered */
  hover: boolean = false;

  /** Whether the current screen size is considered mobile */
  isMobile: boolean = false;

  /** Subscription to observe changes in screen size */
  private subscription!: Subscription;

  /**
   * Lifecycle hook that runs after component initialization.
   * Subscribes to global isMobile$ observable to react to screen size changes.
   */
  ngOnInit() {
    this.isMobile = this.global.isMobile;
    this.subscription = this.global.isMobile$.subscribe(value => {
      this.isMobile = value;
    });
  }

  /**
   * Lifecycle hook that runs before the component is destroyed.
   * Unsubscribes from observables to prevent memory leaks.
   */
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
