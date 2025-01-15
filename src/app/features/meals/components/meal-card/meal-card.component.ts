import { Component, input } from "@angular/core";
import { NgClass } from "@angular/common";
@Component({
  selector: "app-meal-card",
  imports: [NgClass],
  templateUrl: "./meal-card.component.html",
})
export class MealCardComponent {
  mealName = input("default");
  mealTag = input("default");
  mealPrepTime = input("0min");
  mealCalories = input(0);
  mealProtein = input(0);
  mealCarbs = input(0);
  mealFats = input(0);
}
