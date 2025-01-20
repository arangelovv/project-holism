import { Component } from "@angular/core";
import { ExercisesToolbarComponent } from "./components/exercises-toolbar/exercises-toolbar.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-exercises",
  imports: [ExercisesToolbarComponent, RouterLink],
  templateUrl: "./exercises.component.html",
})
export class ExercisesComponent {}
