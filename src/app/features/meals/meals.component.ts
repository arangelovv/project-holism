import { Component } from "@angular/core";
import { MealCardComponent } from "./components/meal-card/meal-card.component";
import { meals } from "./models/meals.models";

@Component({
  selector: "app-meals",
  imports: [MealCardComponent],
  templateUrl: "./meals.component.html",
})
export class MealsComponent {
  meals = meals;
}
