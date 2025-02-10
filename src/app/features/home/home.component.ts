import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  LucideAngularModule,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from 'lucide-angular';
import { CustomLogModalComponent } from './components/custom-log-modal/custom-log-modal.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe, LucideAngularModule, CustomLogModalComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  authService = inject(AuthService);
  selectedDate = new Date();
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;
  readonly CalendarIcon = Calendar;

  isCustomLogOpen = signal(false);

  handlePrevDay() {
    this.selectedDate = new Date(this.selectedDate);
    this.selectedDate.setDate(this.selectedDate.getDate() - 1);
  }

  handleNextDay() {
    this.selectedDate = new Date(this.selectedDate);
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
  }

  openModal() {
    this.isCustomLogOpen.set(true);
  }

  handleCloseModal() {
    this.isCustomLogOpen.set(false);
  }
}
