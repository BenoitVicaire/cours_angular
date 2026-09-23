import { Service } from '@angular/core';

@Service()
export class UserApi {
  private apiUrl = 'https://randomuser.me/api/';

  async getRandomUser(): Promise<any> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      console.error('Erreur API :', error);
      throw error;
    }
  }
}
