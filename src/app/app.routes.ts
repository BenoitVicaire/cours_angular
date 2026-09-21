import { Routes } from '@angular/router';
import { exercicesRoutes } from './pages/exercices/exercices.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About),
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    },
    {
        path: 'exercices',
        children: exercicesRoutes,
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    },
];
