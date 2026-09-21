import { Component } from '@angular/core';
interface User {
	id: number;
	name: string;
	age: number;
	image: string;
	bio: string;
	status: string;
	github: string;
}



@Component({
  imports: [],
  selector: 'app-attribute-binding',
  styleUrl: './attribute-binding.css',
  templateUrl: './attribute-binding.html',
})
export class AttributeBinding {
	alice : User = {id:1, name:'Alice', age:30, image:'https://randomuser.me/api/portraits/women/44.jpg', bio:'Dev Angular', status:'active', github:'github.com/alice'};
}