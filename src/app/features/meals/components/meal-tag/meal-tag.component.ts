import { Component, input } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-meal-tag",
  imports: [NgClass],
  templateUrl: "./meal-tag.component.html",
})
export class MealTagComponent {
  mealTag = input("default");
}
