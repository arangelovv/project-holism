import { Component } from "@angular/core";
import { MealCardComponent } from "./components/meal-card/meal-card.component";
import { meals } from "./models/meals.models";
import { ToolbarComponent } from "../../shared/components/toolbar/toolbar.component";
import { MealsToolbarComponent } from "./components/meals-toolbar/meals-toolbar.component";
@Component({
  selector: "app-meals",
  imports: [MealCardComponent, ToolbarComponent, MealsToolbarComponent],
  templateUrl: "./meals.component.html",
})
export class MealsComponent {
  meals = meals;
}
