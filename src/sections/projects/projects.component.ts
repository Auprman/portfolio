import { Component, HostListener, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ScrollFadeDirective } from '../../shared/scroll-fade.directive';




@Component({
  selector: 'app-projects',
  imports: [CommonModule, ScrollFadeDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})



export class ProjectsComponent { 
  
  global = inject(GlobalService)
  hover:boolean = false;
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
