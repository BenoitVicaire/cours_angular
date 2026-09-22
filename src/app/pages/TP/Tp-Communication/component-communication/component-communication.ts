import { Component } from '@angular/core';
import { ActiveUser, User } from '../active-user/active-user';
import { UserData } from '../user-data/user-data';

@Component({
	imports: [ActiveUser, UserData],
	selector: 'app-component-communication',
	styleUrl: './component-communication.css',
	templateUrl: './component-communication.html',
})
export class ComponentCommunication {
	oneUser: User = { name: 'AZERTYUIOP', age: 45 };
	updateUser(newUser : User){
		this.oneUser = newUser;
	}
}
