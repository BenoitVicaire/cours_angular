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
	loadChildren: () => import('./pages/exercices/exercices.routes').then(m => m.exercicesRoutes),
	},
	{
	path: 'tp',
	loadChildren: () => import('./pages/TP/tp.routes').then(m => m.tpRoutes),
	},
	{
	path: 'lessons',
	loadChildren: () => import('./pages/lessons/lessons.routes').then(m => m.lessonsRoutes),
	},
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    },
];
