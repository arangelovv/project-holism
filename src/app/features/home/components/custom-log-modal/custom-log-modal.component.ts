import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-log-modal',
  imports: [],
  templateUrl: './custom-log-modal.component.html',
})
export class CustomLogModalComponent {
  @Input() isCustomLogOpen: boolean = false; // Controls the modal visibility
  @Output() closeModal = new EventEmitter<void>();
}
