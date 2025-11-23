import {
  Component,
  computed,
  Input,
  signal,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { IUser } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: false,
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) selected!: boolean;

  // No need to instance EventEmitter object (already done by the output)
  // Its the same code as @Output (it's not a signal)
  // The only advantages is less code and to not use the Output decorator
  select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
// export class UserComponent {
//   @Input({ required: true }) id!: string;
//   @Input({ required: true }) name!: string;
//   @Input() avatar!: string;

//   // No need to instance EventEmitter object (already done by the output)
//   // Its the same code as @Output (it's not a signal)
//   // The only advantages is less code and to not use the Output decorator
//   select = output<string>();

//   get imagePath() {
//     return 'assets/users/' + this.avatar;
//   }

//   onSelectUser() {
//     this.select.emit(this.id);
//   }
// }

//** Using Outputs & Emitting Data
// export class UserComponent {
//   @Input({ required: true }) id!: string;
//   @Input({ required: true }) name!: string;
//   @Input() avatar!: string;

//   @Output() select = new EventEmitter<string>();

//   get imagePath() {
//     return 'assets/users/' + this.avatar;
//   }

//   onSelectUser() {
//     this.select.emit(this.id);
//   }
// }

// export class UserComponent {
//   @Input() avatar!: string;
//   @Input({ required: true }) name!: string;

// selectedUser = signal(DUMMY_USERS[randomIndex]);
// imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

//Getter -> its used like a property
// get imagePath() {
//   return 'assets/users/' + this.selectedUser().avatar;
// }
//   get imagePath() {
//     return 'assets/users/' + this.avatar;
//   }

//   onSelectUser() {}

//   // onSelectUser() {
//   // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//   // this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   // }
// }

//**Signal Approach
// export class UserComponent {
//   name = input.required<string>();
//   avatar = input<string>();

//   imagePath = computed(() => 'assets/users/' + this.avatar());
// }
