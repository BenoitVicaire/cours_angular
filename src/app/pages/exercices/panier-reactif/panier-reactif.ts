import { DecimalPipe } from '@angular/common';
import { Component, computed, signal, effect} from '@angular/core';

@Component({
  imports: [DecimalPipe],
  selector: 'app-panier-reactif',
  styleUrl: './panier-reactif.css',
  templateUrl: './panier-reactif.html',
})
export class PanierReactif {

	constructor(){
		effect(()=>{
			const state = {
				quantity: this.quantity(),
				discountCode: this.discountCode(),
				express: this.express(),
				total: this.total()
			};
			console.log('[EFFECT] Mise à jours du panier :', state);
			localStorage.setItem('panier', JSON.stringify(state));
		});
	}
	unitPrice = signal<number>(35)
	quantity = signal<number>(1)
	discountCode = signal<number>(0)
	express = signal<boolean>(false)
	discountOptions = signal<number[]>([0,10,20]);

	subtotal():number{
		return this.quantity() * this.unitPrice()
	}
	discountAmount():number{
		return this.subtotal() * this.discountCode() / 100
	}
	shippingCost():number{
		return this.subtotal()> 100
		? (this.express()? 12 : 0)
		: (this.express()? 12 : 5)
	}
	total = computed(()=> 
		this.quantity()===0 
		? 0
		: this.subtotal() - this.discountAmount() + this.shippingCost()
	)

	freeShippingRemaining = computed(()=>
		Math.max(0,100-this.subtotal())
	)

	incrementQte():void{
		this.quantity.update(q => q + 1)
	}
	decrementQte():void{
		this.quantity.update(q => q - 1)
	}
	toggleExpress():void{
		this.express.update(v => !v)
	}
	reset():void{
		this.quantity.set(1)
		this.discountCode.set(0)
		this.express.set(false)
	}
}
