import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { RegisterComponent } from './paginas/register/register.component';
import { LoginComponent } from './paginas/login/login.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { SubmitProjectComponent } from './paginas/submit-project/submit-project.component';
import { ProjectComponent } from './paginas/project/project.component';


export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'students',
        component: DashboardComponent
    },
    {
      path: 'submit-project',
      component: SubmitProjectComponent
    },
    {
        path: 'all-projects',
        component: ProjectComponent
    }
];

