import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AtfComponent } from "../sections/atf/atf.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { WhyMeComponent } from "../sections/why-me/why-me.component";
import { SkillsComponent } from "../sections/skills/skills.component";
import { ProjectsComponent } from "../sections/projects/projects.component";
import { ContactComponent } from "../sections/contact/contact.component";
import { ReferencesComponent } from "../sections/references/references.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AtfComponent, NavbarComponent, WhyMeComponent, RouterModule, SkillsComponent, ProjectsComponent, ContactComponent, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';  
}
