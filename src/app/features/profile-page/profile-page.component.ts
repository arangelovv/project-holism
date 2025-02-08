import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [RouterLink],
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent {
  authService = inject(AuthService);
  edit = signal(false);
}
