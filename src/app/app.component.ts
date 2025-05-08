import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AtfComponent } from "../sections/atf/atf.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { WhyMeComponent } from "../sections/why-me/why-me.component";
import { SkillsComponent } from "../sections/skills/skills.component";
import { ProjectsComponent } from "../sections/projects/projects.component";
import { ContactComponent } from "../sections/contact/contact.component";
import { ReferencesComponent } from "../sections/references/references.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../shared/footer/footer.component";
import { BurgermenuComponent } from "../shared/burgermenu/burgermenu.component";
import { GlobalService } from '../global.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AtfComponent, NavbarComponent, WhyMeComponent, RouterModule, SkillsComponent, ProjectsComponent, ContactComponent, ReferencesComponent, ReactiveFormsModule, FooterComponent, BurgermenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';  
  constructor(private global: GlobalService) {
    this.global.onResize(); 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.global.onResize();
  }
}

