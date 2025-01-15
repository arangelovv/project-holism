import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "meals",
  },
  {
    path: "home",
    loadComponent: () =>
      import("./features/home/home.component").then((c) => c.HomeComponent),
  },
  {
    path: "meals",
    loadComponent: () =>
      import("./features/meals/meals.component").then((c) => c.MealsComponent),
  },
  {
    path: "exercises",
    loadComponent: () =>
      import("./features/exercises/exercises.component").then(
        (c) => c.ExercisesComponent
      ),
  },
];
