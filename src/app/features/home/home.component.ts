import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  authService = inject(AuthService);
}
