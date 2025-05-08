import {Component, computed, EventEmitter, Input, input, output, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

interface User {
  id: string,
  name: string,
  avatar: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User
  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar)

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
