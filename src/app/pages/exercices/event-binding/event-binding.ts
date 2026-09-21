import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event-binding',
  styleUrl: './event-binding.css',
  templateUrl: './event-binding.html',
})
export class EventBinding {
	constructor(){
		setTimeout(()=> this.disableBtn,6000)
	}
	message:string = "";
	listFriendsCreationStatus:string = "Aucun ami"
	btnDisabled:boolean=false;

	updateMsg(event : Event){
		const input = event.target as HTMLInputElement;
		this.message = input.value;
	}
	addFriend(){
		this.listFriendsCreationStatus = "Votre ami a été ajouté!"
	}
	disableBtn(){
		this.btnDisabled = true;
	}
}
