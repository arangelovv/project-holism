import { Component, input } from "@angular/core";

@Component({
  selector: "app-ingridient-chip",
  imports: [],
  templateUrl: "./ingridient-chip.component.html",
})
export class IngridientChipComponent {
  ingridientName = input("");
  ingridientGrams = input();
}
