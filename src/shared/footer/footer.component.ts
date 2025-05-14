import { Component, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-footer',
  imports: [LogoComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  global = inject(GlobalService);

  githubHovered:boolean = false;
  mailHovered:boolean = false;
  linkedinHovered:boolean = false;


}
