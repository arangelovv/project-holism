import { Component, inject, Signal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { meals } from '../../models/meals.models';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Clock, Scale } from 'lucide-angular';

@Component({
  selector: 'app-meal-details',
  imports: [NgClass, RouterLink, LucideAngularModule],
  templateUrl: './meal-details.component.html',
})
export class MealDetailsComponent {
  readonly ClockIcon = Clock;
  readonly ScaleIcon = Scale;
  route: ActivatedRoute = inject(ActivatedRoute);
  mealDetailsId: number = 0;
  activeTab = signal<'ingridients' | 'instructions'>('ingridients');
  mealDetails: any | undefined = undefined;
  servingSize = signal<number>(1);

  constructor() {
    this.mealDetailsId = Number(this.route.snapshot.params['id']);
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
  getMaxValue(a: number, b: number): number {
    return Math.max(a, b);
  }
}
