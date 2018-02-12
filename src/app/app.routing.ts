import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import{ RouterModule, Routes } from  '@angular/router';

const Routes: Routes =[
    { path:'contact',component: ContactComponent },
    { path:'about-us',component: AboutUsComponent},
    { path:'service',component: ServiceComponent},
    { path:'product',component: ProductComponent},
    { path: '**',component:HomeComponent }

];

export const AppRouting = RouterModule.forRoot(Routes);