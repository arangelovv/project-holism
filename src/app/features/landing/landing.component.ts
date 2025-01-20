import { Component, inject } from "@angular/core";
import { AuthService } from "../../shared/services/auth/auth.service";

@Component({
  selector: "app-auth",
  imports: [],
  templateUrl: "./landing.component.html",
})
export class LandingComponent {
  authService = inject(AuthService);
}
