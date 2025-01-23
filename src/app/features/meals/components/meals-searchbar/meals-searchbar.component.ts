import { Component, inject } from "@angular/core";
import { FilterMealsService } from "../../services/filter-meals.service";

@Component({
  selector: "app-meals-searchbar",
  imports: [],
  templateUrl: "./meals-searchbar.component.html",
})
export class MealsSearchbarComponent {
  filtersMealsService = inject(FilterMealsService);

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filtersMealsService.setSearchValue(value); // Update the signal value
  }
}
