import { Component, computed, inject } from "@angular/core";
import { MealCardComponent } from "./components/meal-card/meal-card.component";
import { meals } from "./models/meals.models";
import { ToolbarComponent } from "../../shared/components/toolbar/toolbar.component";
import { MealsToolbarComponent } from "./components/meals-toolbar/meals-toolbar.component";
import { FilterMealsService } from "./services/filter-meals.service";
@Component({
  selector: "app-meals",
  imports: [MealCardComponent, MealsToolbarComponent],
  templateUrl: "./meals.component.html",
})
export class MealsComponent {
  private filterMealsService = inject(FilterMealsService);
  meals = meals;

  filteredMeals = computed(() =>
    this.meals.filter((meal) =>
      meal.mealName
        .toLowerCase()
        .includes(this.filterMealsService.searchValue().toLowerCase())
    )
  );
}
