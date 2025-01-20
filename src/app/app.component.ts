import { Component } from "@angular/core";
import { CoreComponent } from "./core/core.component";
import { RouterOutlet } from "@angular/router";
@Component({
  selector: "app-root",
  imports: [CoreComponent, RouterOutlet],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
