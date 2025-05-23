import { Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { MainComponent } from '../main/main.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';




export const routes: Routes = [
    { 
        path: '',         
        component: MainComponent,
    },
    {
        path: 'privacy',
        component: PrivacyComponent,
        data: { title: 'Privacy policy' }
    },
    {
        path: 'legal-notice',
        component: LegalNoticeComponent,
        data: { title: 'Legal notice' }
    }  
];
