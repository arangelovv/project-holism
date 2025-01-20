import { Component } from "@angular/core";
import { ExercisesToolbarComponent } from "./components/exercises-toolbar/exercises-toolbar.component";
@Component({
  selector: "app-exercises",
  imports: [ExercisesToolbarComponent],
  templateUrl: "./exercises.component.html",
})
export class ExercisesComponent {}
