import { computed, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FilterMealsService {
  private mealsSearchState = signal<string>("");

  //selectors
  searchValue = computed(() => this.mealsSearchState());
  constructor() {}

  setSearchValue(value: string): void {
    this.mealsSearchState.set(value);
  }
}
