import { Component, HostListener, inject } from "@angular/core";
import { ToolbarComponent } from "../../../../shared/components/toolbar/toolbar.component";
import { AuthService } from "../../../../shared/services/auth/auth.service";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-exercises-toolbar",
  imports: [ToolbarComponent, RouterLink],
  templateUrl: "./exercises-toolbar.component.html",
})
export class ExercisesToolbarComponent {
  authService = inject(AuthService);
  screenWidth: number = window.innerWidth;

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.screenWidth = (event.target as Window).innerWidth;
    console.warn(this.screenWidth);
  }
}
