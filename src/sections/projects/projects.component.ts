import { Component, HostListener, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})



export class ProjectsComponent { 
  
  global = inject(GlobalService)
  hover:boolean = false;
  isMobile:boolean = false;


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 1024;
  }

ngOnInit(){
  
}


}
