import { Component, Input } from '@angular/core';

export interface User {
	name: string;
	age: number;
}

@Component({
	imports: [],
	selector: 'app-active-user',
	styleUrl: './active-user.css',
	templateUrl: './active-user.html',
})
export class ActiveUser {
	@Input() activeUser!: User;
}
