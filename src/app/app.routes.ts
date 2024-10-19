import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutVinLinkComponent } from './about-vin-link/about-vin-link.component';
import { ContactComponent } from './contact/contact.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';




export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // Default route redirects to dashboard
    { path: 'dashboard', component: DashboardComponent },  // Route to Dashboard component
    {path: 'about', component: AboutVinLinkComponent},
    {path: 'contact', component: ContactComponent},
    {path:'login', component: LoginFormComponent},
    {path: 'register', component: RegisterComponent}
];
