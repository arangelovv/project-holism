import { Component, computed, inject } from '@angular/core';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { meals } from './models/meals.models';
import { FilterMealsService } from './services/filter-meals.service';
import { AuthService } from '../../shared/services/auth/auth.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-meals',
  imports: [MealCardComponent, RouterLink],
  templateUrl: './meals.component.html',
})
export class MealsComponent {
  authService = inject(AuthService);
  private filterMealsService = inject(FilterMealsService);
  meals = meals;

  filtersMealsService = inject(FilterMealsService);

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filtersMealsService.setSearchValue(value); // Update the signal value
  }

  filteredMeals = computed(() =>
    this.meals.filter((meal) =>
      meal.mealName
        .toLowerCase()
        .includes(this.filterMealsService.searchValue().toLowerCase())
    )
  );
}
