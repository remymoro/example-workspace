import { AuthenticationUser } from '../models/authentication-user';
import { signalStore, withState } from '@ngrx/signals';

// 1 . état à créer
export interface AuthenticationState {
  user: AuthenticationUser | undefined | null;
  isLoading: boolean;
}

// 2 . valeur initiale
const initialeValue: AuthenticationState = {
  user: undefined,
  isLoading: false,
};

// 3 reducer /store ..

export const AuthenticationStore = signalStore(
  { providedIn: 'root' },
  withState(initialeValue)
);
