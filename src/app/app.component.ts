import { Component } from '@angular/core';
import * as router from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)
  }

  onSelectUser(id: string) {
    // console.log('selected user with id: ' + id);
    this.selectedUserId = id;
  }
}
