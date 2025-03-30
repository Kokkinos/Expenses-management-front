import { Component, input, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { TotalService } from '../services/total.service';
import { PaymentType } from '../models/payment-type';


@Component({
	selector: 'app-payments',
	imports: [ReactiveFormsModule, ButtonModule, InputNumberModule],
	templateUrl: './payments.component.html',
	styleUrl: './payments.component.css'
})
export class PaymentsComponent {
	@Input() paymentType!: {label: string, value: string};

	paymentForm = new FormGroup({
		paymentInput: new FormControl(0, {
			validators: [Validators.required]
		})
	});

	constructor(private totalService: TotalService) {

	}

	onSubmit() {
		// console.log(this.paymentType);
		const enteredAmount = this.paymentForm.value.paymentInput!;
		this.totalService.addSpecificAmount(this.paymentType.label, enteredAmount); 
		this.totalService.addAmount(enteredAmount);
	}
}
