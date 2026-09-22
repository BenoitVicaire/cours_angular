import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../active-user/active-user';

@Component({
  imports: [FormsModule],
  selector: 'app-user-data',
  styleUrl: './user-data.css',
  templateUrl: './user-data.html',
})
export class UserData {
	name: string = '';       
	age : number = 0;

	@Output() userDataEmitUpdate = new EventEmitter<User>();

	onUpdate(){
		this.userDataEmitUpdate.emit({name: this.name, age: this.age})
	}
}
