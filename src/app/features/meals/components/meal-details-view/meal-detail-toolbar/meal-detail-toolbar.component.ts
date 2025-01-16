import { Component, input, output } from "@angular/core";
import { ToolbarComponent } from "../../../../../shared/components/toolbar/toolbar.component";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-meal-detail-toolbar",
  imports: [ToolbarComponent, RouterLink, FormsModule],
  templateUrl: "./meal-detail-toolbar.component.html",
})
export class MealDetailToolbarComponent {
  servingSize = input<number>();
  servingSizeChange = output<number>();

  onInput(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.servingSizeChange.emit(value);
  }
}
