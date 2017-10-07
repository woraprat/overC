import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import{ RouterModule, Routes } from  '@angular/router';

const Routes: Routes =[
    { path:'contact',component: ContactComponent },
    { path: '**',component:HomeComponent }

];

export const AppRouting = RouterModule.forRoot(Routes);