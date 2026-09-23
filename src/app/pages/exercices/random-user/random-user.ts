import { Component, inject, signal, OnInit } from '@angular/core';
import { UserApi } from '../../../services/user-api';

@Component({
  imports: [],
  selector: 'app-random-user',
  styleUrl: './random-user.css',
  templateUrl: './random-user.html',
})
export class RandomUser implements OnInit {
  private userApi = inject(UserApi);

  readonly user = signal<any>(null);
  readonly isLoading = signal(true);

  async ngOnInit() {
    try {
      this.user.set(await this.userApi.getRandomUser());
    } catch (error) {
      console.error('Erreur :', error);
    } finally {
      this.isLoading.set(false);
    }
  }
}
