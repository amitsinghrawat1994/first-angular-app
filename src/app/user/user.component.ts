import { Component, computed, EventEmitter, Input, input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) id!: string
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // avatar = input.required<string>();
  // name = input.required<string>();
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
