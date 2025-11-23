import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  onSelectUser(id: string) {
    console.log('Selected user width id: ' + id);
    this.selectedUserId = id;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
}

//** Using Outputs & Emitting Data
// export class AppComponent {
//   users = DUMMY_USERS;
//   title = 'first-angular-app';

//   onSelectUser(id: string) {
//     console.log('Selected user width id: ' + id);
//   }
// }
