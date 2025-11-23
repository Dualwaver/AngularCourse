import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
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
