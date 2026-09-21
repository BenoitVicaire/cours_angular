# Cours Angular

Projet pédagogique pour apprendre Angular 22 avec Tailwind CSS 4 et daisyUI 5.

## Stack

- **Angular 22** (standalone components uniquement, pas de NgModule)
- **TypeScript 6**
- **Tailwind CSS 4** + **daisyUI 5** pour le style
- **Vitest** pour les tests
- **npm** comme package manager

## Commandes

- `npm start` — démarre le serveur de dev sur http://localhost:4200
- `npm run build` — build de production
- `npm test` — lance les tests Vitest
- `npm run watch` — build en mode watch

## Structure

```
src/app/
├── layout/            # composants de mise en page (header, footer)
│   ├── header/
│   └── footer/
├── pages/             # pages routées
│   ├── home/
│   ├── about/
│   ├── contact/
│   ├── not-found/
│   └── exercices/     # exercices du cours
│       ├── exercices.routes.ts   # source de vérité (tableau EXERCICES)
│       └── text-interpolation/
├── app.ts             # composant racine
├── app.html
├── app.routes.ts      # routes de l'app
└── app.config.ts      # config (router, providers)
```

## Conventions

- **Composants standalone** : chaque `@Component` déclare ses propres `imports` (pas de `NgModule`).
- **Lazy loading** : chaque route utilise `loadComponent: () => import(...)`.
- **Exercices** : ajouter un exo = ajouter une entrée dans `EXERCICES` dans [exercices.routes.ts](src/app/pages/exercices/exercices.routes.ts). Le lien dans la navbar et la route s'ajoutent automatiquement.
- **Style** : privilégier les classes daisyUI (`btn`, `card`, `navbar`, `hero`...) puis Tailwind pour les ajustements.
- **Nouvelle syntaxe Angular** : utiliser `@if`, `@for`, `@switch` (pas `*ngIf`, `*ngFor`).
- **Signals** : préférer `signal()` aux propriétés simples pour l'état réactif.

## Pièges à éviter

- Pipes du template (`| json`, `| date`, etc.) : penser à les ajouter dans `imports: [JsonPipe]` du composant, pas juste dans le fichier `.ts`.
- `routerLink` : idem, `RouterLink` doit être dans les `imports` du composant.
