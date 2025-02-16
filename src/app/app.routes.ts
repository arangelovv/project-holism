import { Routes } from '@angular/router';
import {
  redirectLoggedInToDashboard,
  redirectUnauthorizedToLogin,
} from './shared/services/auth/auth.guards';
import { AuthGuard } from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/landing/landing.component').then(
        (c) => c.LandingComponent
      ),
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
    loadComponent: () =>
      import('./features/auth/auth.component').then((c) => c.AuthComponent),
  },

  {
    path: 'app',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadComponent: () =>
      import('./core/core.component').then((c) => c.CoreComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadComponent: () =>
          import('./features/home/home.component').then((c) => c.HomeComponent),
      },

      {
        path: 'meals',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadComponent: () =>
          import('./features/meals/meals.component').then(
            (c) => c.MealsComponent
          ),
      },
      {
        path: 'meal-details/:id',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadComponent: () =>
          import(
            './features/meals/components/meal-details-view/meal-details.component'
          ).then((c) => c.MealDetailsComponent),
      },
      {
        path: 'exercises',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadComponent: () =>
          import('./features/exercises/exercises.component').then(
            (c) => c.ExercisesComponent
          ),
      },
      {
        path: 'user-profile',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadComponent: () =>
          import('./features/profile-page/profile-page.component').then(
            (c) => c.ProfilePageComponent
          ),
      },
    ],
  },
];
