import { Component, inject,OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { SimpleNavbarComponent } from '../../shared/simple-navbar/simple-navbar.component';
import { GlobalService } from '../../global.service';
import { CommonModule } from '@angular/common';






@Component({
  selector: 'app-legal-notice',
  imports: [FooterComponent, SimpleNavbarComponent,CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
  
})
export class LegalNoticeComponent {

  global = inject(GlobalService);

  ngOninit(){
    this.global.isLegalNoticePage = true;
  }

  scrolltoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
