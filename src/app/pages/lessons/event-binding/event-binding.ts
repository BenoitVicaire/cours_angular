import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
})
export class EventBinding {

  // Variables pour la démo
  username: string = '';
  clickCount: number = 0;

  onInputChange(event: Event) {
    console.log(event);
    console.log(event.target);
    const input = event.target as HTMLInputElement;
    this.username = input.value;
  }

  onButtonClick() {
    this.clickCount++;
  }
}
