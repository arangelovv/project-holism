import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { meals } from "../../models/meals.models";
import { NgClass } from "@angular/common";
import { MealTagComponent } from "../meal-tag/meal-tag.component";
import { ToolbarComponent } from "../../../../shared/components/toolbar/toolbar.component";
import { MealDetailToolbarComponent } from "./meal-detail-toolbar/meal-detail-toolbar.component";
import { IngridientChipComponent } from "./ingridient-chip/ingridient-chip.component";

@Component({
  selector: "app-meal-details",
  imports: [
    NgClass,
    MealTagComponent,
    ToolbarComponent,
    MealDetailToolbarComponent,
    IngridientChipComponent,
  ],
  templateUrl: "./meal-details.component.html",
})
export class MealDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  mealDetailsId: number = 0;
  mealDetails: any | undefined = undefined;
  servingSize = signal<number>(1);

  constructor() {
    this.mealDetailsId = Number(this.route.snapshot.params["id"]);
    this.mealDetails = meals.find((meal) => meal.id === this.mealDetailsId);
  }

  updateServingSize(newValue: number) {
    this.servingSize.set(newValue);
  }

  adjustedIngredients = () =>
    this.mealDetails.mealIngridients.map((ingredient: { grams: number }) => ({
      ...ingredient,
      grams: ingredient.grams * this.servingSize(),
    }));

  adjustedMacronutrients = () => ({
    protein: this.mealDetails.mealProtein * this.servingSize(),
    carbs: this.mealDetails.mealCarbs * this.servingSize(),
    fats: this.mealDetails.mealFats * this.servingSize(),
  });

  adjustedCalories = () => this.mealDetails.mealCalories * this.servingSize();
}
