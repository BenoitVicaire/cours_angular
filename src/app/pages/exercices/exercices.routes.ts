import { Routes } from '@angular/router';

/**
 * Source de vérité unique pour les exercices.
 * Ajoute une entrée ici → la route ET le lien dans la navbar apparaissent automatiquement.
 */
export interface ExerciceRoute {
  path: string;
  label: string;
  loadComponent: () => Promise<unknown>;
}

export const EXERCICES: ExerciceRoute[] = [
  {
    path: 'text-interpolations',
    label: 'Text interpolations',
    loadComponent: () => import('./text-interpolation/text-interpolation').then(m => m.TextInterpolation),
  },
  {
    path: 'attribute-binding',
    label: 'Attribute binding',
    loadComponent: () => import('./attribute-binding/attribute-binding').then(m => m.AttributeBinding),
  },
  {
    path: 'event-binding',
    label: 'Event binding',
    loadComponent: () => import('./event-binding/event-binding').then(m => m.EventBinding),
  },
];

export const exercicesRoutes: Routes = EXERCICES.map(({ path, loadComponent }) => ({
  path,
  loadComponent: loadComponent as never,
}));
