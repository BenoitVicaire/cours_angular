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
  {
    path: 'tp-directives',
    label: 'TP directives',
    loadComponent: () => import('./tp-directives/tp-directives').then(m => m.TpDirectives),
  },
  {
    path: 'random-user',
    label: 'Random user',
    loadComponent: () => import('./random-user/random-user').then(m => m.RandomUser),
  },
  {
    path: 'observables-simple',
    label: 'Oberservales simple',
    loadComponent: () => import('./observables-simple/observables-simple').then(m => m.ObservablesSimple),
  },
  {
    path: 'panier-reactif',
    label: 'Panier Reactifs',
    loadComponent: () => import('./panier-reactif/panier-reactif').then(m => m.PanierReactif),
  },
  {
    path: 'formulaire-regex',
    label: 'Formulaire Regex',
    loadComponent: () => import('./formulaire-regex/formulaire-regex').then(m => m.FormulaireRegex),
  },
];

export const exercicesRoutes: Routes = EXERCICES.map(({ path, loadComponent }) => ({
  path,
  loadComponent: loadComponent as never,
}));
