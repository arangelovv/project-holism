import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meal-card',
  imports: [NgClass, RouterLink],
  templateUrl: './meal-card.component.html',
})
export class MealCardComponent {
  mealId = input();
  mealName = input('default');
  mealTag = input('default');
  mealPrepTime = input('0min');
  mealCalories = input(0);
  mealProtein = input(0);
  mealCarbs = input(0);
  mealFats = input(0);
}
