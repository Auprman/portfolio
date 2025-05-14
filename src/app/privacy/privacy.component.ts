import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-privacy',
  imports: [FooterComponent, RouterModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {


  scrolltoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
