import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationUser } from '../models/authentication-user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationInfrastructure {
  login(email: string, password: string): Observable<AuthenticationUser> {
    throw new Error('not implemented exectption');
  }
}
