import { Component } from "@angular/core";
import { CoreComponent } from "./core/core/core.component";

@Component({
  selector: "app-root",
  imports: [CoreComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
