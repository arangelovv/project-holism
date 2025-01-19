import { Routes } from "@angular/router";
import {
  redirectLoggedInToDashboard,
  redirectUnauthorizedToLogin,
} from "./shared/services/auth/auth.guards";
import { AuthGuard } from "@angular/fire/auth-guard";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "meals",
  },
  {
    path: "landing",
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
    loadComponent: () =>
      import("./features/auth/auth.component").then((c) => c.AuthComponent),
  },
  {
    path: "user",
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadComponent: () =>
      import("./features/user-profile/user-profile.component").then(
        (c) => c.UserProfileComponent
      ),
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadComponent: () =>
      import("./features/home/home.component").then((c) => c.HomeComponent),
  },
  {
    path: "meals",
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadComponent: () =>
      import("./features/meals/meals.component").then((c) => c.MealsComponent),
  },
  {
    path: "meal-details/:id",
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadComponent: () =>
      import(
        "./features/meals/components/meal-details-view/meal-details.component"
      ).then((c) => c.MealDetailsComponent),
  },
  {
    path: "exercises",
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadComponent: () =>
      import("./features/exercises/exercises.component").then(
        (c) => c.ExercisesComponent
      ),
  },
];
