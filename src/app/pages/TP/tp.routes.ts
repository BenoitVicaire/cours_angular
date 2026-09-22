import { Routes } from '@angular/router';

export interface TPRoute {
  path: string;
  label: string;
  loadComponent: () => Promise<unknown>;
}

export const TP: TPRoute[] = [
  {
    path: 'tp-communication',
    label: 'TP Communication',
    loadComponent: () => import('./Tp-Communication/component-communication/component-communication').then(m => m.ComponentCommunication),
  },
  
];

export const tpRoutes: Routes = TP.map(({ path, loadComponent }) => ({
  path,
  loadComponent: loadComponent as never,
}));
