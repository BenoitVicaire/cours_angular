import { Component, signal , DestroyRef, inject } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-observables-simple',
  styleUrl: './observables-simple.css',
  templateUrl: './observables-simple.html',
})
export class ObservablesSimple {
	private destroyRef = inject(DestroyRef);

	constructor(){
		this.destroyRef.onDestroy(()=> this.stopSubscription());
	}

	numbers = signal<number[]>([])
	paused = signal<boolean>(false)
	private subscription: Subscription | null = null;

	start():void {
		console.log("starting");

		if(!this.subscription){
			this.subscription = interval(1000).subscribe(() =>{
				const randomNum = Math.floor(Math.random() * 100);
				console.log(`nombre generé : ${randomNum}`)
				this.numbers.update(list => [...list, randomNum]);
			}
		)}
	}
	stopSubscription():void{
		if(this.subscription){
			this.subscription.unsubscribe()
			this.subscription=null
		}
	}
	pauseResume():void{
		this.paused.update(v => !v);
		if(this.paused()==true){
			this.stopSubscription();
		}else{
			this.start();
		}
	}
	stop():void{
		this.stopSubscription();
		this.numbers.set([])
		this.paused.set(false);
	}
}
