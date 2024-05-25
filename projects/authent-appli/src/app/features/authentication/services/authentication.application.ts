import { Injectable, effect, inject } from '@angular/core';
import { AuthenticationStore } from '../store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationApplication {
  private readonly store = inject(AuthenticationStore);
  private readonly router = inject(Router);

  private redirectToLoginEffect = effect(() => {
    // si je suis authentifié je bouge vers la page d'accueil
    if (this.store.isAuthenticated()) {
      this.router.navigate(['home']);
    }
  });

  login(login: string, password: string) {
    this.store.logIn({ login, password });
  }
}
