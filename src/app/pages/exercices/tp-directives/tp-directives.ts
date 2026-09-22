import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-tp-directives',
  styleUrl: './tp-directives.css',
  templateUrl: './tp-directives.html',
})
export class TpDirectives {
	buttonState = false;
	uselessArray : number[] = [];
	textColor='white';
	toggle() {
		this.buttonState = !this.buttonState;
		this.uselessArray.push(this.uselessArray.length)
	}

}
