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
    path: "meal-details/:id",
    loadComponent: () =>
      import(
        "./features/meals/components/meal-details/meal-details.component"
      ).then((c) => c.MealDetailsComponent),
  },
  {
    path: "exercises",
    loadComponent: () =>
      import("./features/exercises/exercises.component").then(
        (c) => c.ExercisesComponent
      ),
  },
];
