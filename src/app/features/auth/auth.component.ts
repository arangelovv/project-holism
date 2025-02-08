import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  authService = inject(AuthService);
}
