import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-setup',
  // Version avec les nouvelle syntaxe de template (CONTROL FLOW) pour remplacer ngFor --> @for dans le template et pas besoin d'imports dans le ts normalement
  imports: [NgFor],
  // templateUrl: './setup.html',
  template:`
  <div class="max-w-5xl mx-auto p-6 space-y-10">
  <!-- 🟦 Titre principal -->
  <h1 class="text-4xl font-bold text-center text-primary">
    🚀 Setup de votre Application Angular
  </h1>
  <p class="text-center text-base-content/70">
    Découvrez deux méthodes pour créer une application Angular : via le CLI officiel ou via Vite.
  </p>

  <!-- 🟩 Bloc CLI Angular -->
  <div class="card bg-base-200 shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-secondary">✨ Avec Angular CLI</h2>
      <p class="text-base-content/70 mb-4">
        La méthode officielle pour générer une application Angular.
      </p>
      <ul class="space-y-3">
        <li *ngFor="let cli of cliSteps" class="p-4 bg-base-100 rounded-lg shadow-sm">
          <span class="font-medium text-primary">{{ cli.step }}</span>
          <pre class="bg-neutral text-neutral-content p-3 rounded mt-2">
<code>{{ cli.command }}</code>
</pre>
        </li>
      </ul>
    </div>
  </div>

  <!-- 🟧 Bloc VITE Angular -->
  <div class="card bg-base-200 shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-accent">⚡ Avec Vite</h2>
      <p class="text-base-content/70 mb-4">
        Une méthode plus rapide et moderne grâce à Vite.
      </p>
      <ul class="space-y-3">
        <li *ngFor="let vite of viteSteps" class="p-4 bg-base-100 rounded-lg shadow-sm">
          <span class="font-medium text-accent">{{ vite.step }}</span>
          <pre class="bg-neutral text-neutral-content p-3 rounded mt-2">
<code>{{ vite.command }}</code>
</pre>
        </li>
      </ul>
    </div>
  </div>

  <!-- 🟨 Conseils -->
  <div class="alert alert-info shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" />
    </svg>
    <span>Astuce : vous pouvez utiliser <code>pnpm</code> ou <code>yarn</code> à la place de <code>npm</code>.</span>
  </div>
</div>
`,
})
export class Setup {
  cliSteps = [
    { step: 'Installer Angular CLI', command: 'npm install -g @angular/cli' },
    { step: 'Créer un nouveau projet Angular', command: 'ng new mon-projet' },
    { step: 'Lancer le serveur de dev', command: 'cd mon-projet && ng serve -o' }
  ];

  viteSteps = [
    { step: 'Créer une app Angular avec Vite', command: 'npm create vite@latest mon-projet-angular' },
    { step: 'Sélectionner Angular dans la liste', command: '(dans le terminal, choisir Angular)' },
    { step: 'Installer les dépendances', command: 'cd mon-projet-angular && npm install' },
    { step: 'Lancer le serveur de dev', command: 'npm run dev' }
  ];
}
