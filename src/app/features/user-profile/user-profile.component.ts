import { Component, inject } from "@angular/core";
import { AuthService } from "../../shared/services/auth/auth.service";

@Component({
  selector: "app-user-profile",
  imports: [],
  templateUrl: "./user-profile.component.html",
})
export class UserProfileComponent {
  authService = inject(AuthService);
}
