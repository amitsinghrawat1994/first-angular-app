import { Component, computed, EventEmitter, Input, input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id!: string
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.id);
  }
}
