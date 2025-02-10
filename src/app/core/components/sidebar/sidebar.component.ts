import { Component } from '@angular/core';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { Utensils, Dumbbell, House } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [NavButtonComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  readonly DumbbellIcon = Dumbbell;
  readonly UtensilsIcon = Utensils;
  readonly HouseIcon = House;
}
