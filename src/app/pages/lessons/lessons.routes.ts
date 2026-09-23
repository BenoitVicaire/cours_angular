import { Routes } from '@angular/router';

/**
 * Source de vérité unique pour les leçons.
 * Ajoute une entrée ici → la route ET le lien dans la navbar apparaissent automatiquement.
 */
export interface LessonRoute {
  path: string;
  label: string;
  loadComponent: () => Promise<unknown>;
}

export const LESSONS: LessonRoute[] = [
  {
    path: 'setup',
    label: 'Setup',
    loadComponent: () => import('./setup/setup').then(m => m.Setup),
  },
  {
    path: 'text-interpolation',
    label: 'Text interpolation',
    loadComponent: () => import('./text-interpolation/text-interpolation').then(m => m.TextInterpolation),
  },
  {
    path: 'property-binding',
    label: 'Property binding',
    loadComponent: () => import('./property-binding/property-binding').then(m => m.PropertyBinding),
  },
  {
    path: 'event-binding',
    label: 'Event binding',
    loadComponent: () => import('./event-binding/event-binding').then(m => m.EventBinding),
  },
  {
    path: 'pipes',
    label: 'Pipes',
    loadComponent: () => import('./pipes/pipes').then(m => m.Pipes),
  },
  {
    path: 'observables',
    label: 'Observables',
    loadComponent: () => import('./observables/observables-lesson').then(m => m.ObservablesLesson),
  },
];

export const lessonsRoutes: Routes = LESSONS.map(({ path, loadComponent }) => ({
  path,
  loadComponent: loadComponent as never,
}));
