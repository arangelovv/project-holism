import { Component, inject } from "@angular/core";
import { AuthService } from "../../shared/services/auth/auth.service";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-user-profile",
  imports: [RouterLink],
  templateUrl: "./user-profile.component.html",
})
export class UserProfileComponent {
  authService = inject(AuthService);
}
