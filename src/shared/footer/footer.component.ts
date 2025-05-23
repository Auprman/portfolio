import { Component, inject,OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../global.service';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-footer',
  imports: [LogoComponent, CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  global = inject(GlobalService);
  
  githubHovered:boolean = false;
  mailHovered:boolean = false;
  linkedinHovered:boolean = false;

}
