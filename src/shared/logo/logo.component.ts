import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Input() signSrc: string = '/assets/img/logo/vector29.svg'; 
  @Input() textColor: 'light' | 'dark' = 'light'; 
}
