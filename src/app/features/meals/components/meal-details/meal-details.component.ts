import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { meals } from "../../models/meals.models";
import { NgClass } from "@angular/common";
import { MealTagComponent } from "../meal-tag/meal-tag.component";

@Component({
  selector: "app-meal-details",
  imports: [NgClass, MealTagComponent],
  templateUrl: "./meal-details.component.html",
})
export class MealDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  mealDetailsId: number = 0;
  mealDetails: any | undefined = undefined;

  constructor() {
    this.mealDetailsId = Number(this.route.snapshot.params["id"]);
    this.mealDetails = meals.find((meal) => meal.id === this.mealDetailsId);
  }
}
