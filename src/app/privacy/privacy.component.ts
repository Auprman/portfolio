import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../global.service';
import { SimpleNavbarComponent } from '../../shared/simple-navbar/simple-navbar.component';




@Component({
  selector: 'app-privacy',
  imports: [FooterComponent, RouterModule,CommonModule, SimpleNavbarComponent, RouterLink],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  global = inject(GlobalService);

  scrolltoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
