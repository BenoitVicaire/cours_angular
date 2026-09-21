import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
	imports: [JsonPipe],
	selector: 'app-text-interpolation',
	styleUrl: './text-interpolation.css',
	templateUrl: './text-interpolation.html',
})
export class TextInterpolation {	
	uneString = 'string';
  	unNumber = 1;
  	unBoolean = true;
	unArray = ["key1", "Key2"];
	unObject = {"key1":"value1", "key2":"value2"}  
}
