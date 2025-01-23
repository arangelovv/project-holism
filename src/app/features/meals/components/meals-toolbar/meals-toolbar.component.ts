import { Component, HostListener, inject } from "@angular/core";
import { ToolbarComponent } from "../../../../shared/components/toolbar/toolbar.component";
import { AuthService } from "../../../../shared/services/auth/auth.service";
import { RouterLink } from "@angular/router";
import { MealsSearchbarComponent } from "../meals-searchbar/meals-searchbar.component";
@Component({
  selector: "app-meals-toolbar",
  imports: [ToolbarComponent, MealsSearchbarComponent, RouterLink],
  templateUrl: "./meals-toolbar.component.html",
})
export class MealsToolbarComponent {
  authService = inject(AuthService);
  screenWidth: number = window.innerWidth;

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.screenWidth = (event.target as Window).innerWidth;
    console.warn(this.screenWidth);
  }
}
