import { Component, inject } from '@angular/core';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  imports: [ToolbarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  authService = inject(AuthService);
}
