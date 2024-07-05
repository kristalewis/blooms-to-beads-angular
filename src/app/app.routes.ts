import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RoutePath } from './enum/route-path.enum';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: RoutePath.HOME, component: HomeComponent },
    { path: RoutePath.BRACELET, component: ProductComponent },
    { path: RoutePath.JEWELRY, component: ProductComponent },
    { path: RoutePath.NONJEWELRY, component: ProductComponent },
    { path: RoutePath.SHADOWBOXES, component: ProductComponent },
    { path: RoutePath.FAQ, component: FaqComponent },
    { path: RoutePath.ABOUT, component: AboutComponent },
    { path: RoutePath.CONTACT, component: ContactComponent },
    { path: RoutePath.WILDCARD, redirectTo: "" },
];
