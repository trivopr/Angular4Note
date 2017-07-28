import { ContactComponent } from './app/contact/contact.component';
import { NotfoundComponent } from './app/notfound/notfound.component';
import { AboutComponent } from './app/about/about.component';
import { HomeComponent } from './app/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routing: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: '**', component: HomeComponent }
];

export const appRoutes = RouterModule.forRoot(routing);
