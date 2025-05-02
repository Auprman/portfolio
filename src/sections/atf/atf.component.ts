import { Component } from '@angular/core';
import { LogoComponent } from "../../shared/logo/logo.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atf',
  imports: [LogoComponent, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {

}
