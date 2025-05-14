import { Routes } from '@angular/router';
import { AtfComponent } from '../sections/atf/atf.component';
import { WhyMeComponent } from '../sections/why-me/why-me.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { ContactComponent } from '../sections/contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { MainComponent } from '../main/main.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';





export const routes: Routes = [
    { 
        path: '',         
        component: MainComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    },
    {
        path: 'legal-notice',
        component: LegalNoticeComponent
    }  
];
