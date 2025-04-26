import { Routes } from '@angular/router';
import { AtfComponent } from '../sections/atf/atf.component';
import { WhyMeComponent } from '../sections/why-me/why-me.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { ContactComponent } from '../sections/contact/contact.component';



export const routes: Routes = [
    { path: 'start', component: AtfComponent },
    { path: 'why-me', component: WhyMeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },  
];
