import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { TotalService } from '../services/total.service';
import { TotalFilter } from '../models/total-filter';

@Component({
  selector: 'app-budget',
  imports: [ReactiveFormsModule, ButtonModule, InputNumberModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent implements OnInit{
  private totalService = inject(TotalService);
  monthly_expenses = signal(0);
  budget_limit = signal(0);
  exceedingAmount = signal(0);
  isSubmitted = signal(false);

  limitForm = new FormGroup({
    limitInput: new FormControl(0, {
      validators: [Validators.required]
    }) 
  });

  ngOnInit(): void {
    this.monthly_expenses.set(this.totalService.getFilteredTotal(TotalFilter.LAST_MONTH));
    // throw new Error('Method not implemented.');
  }

  onSubmit() {
    // console.log(this.monthly_expenses);
		this.budget_limit.set(this.limitForm.value.limitInput!);
    this.exceedingAmount.set(this.monthly_expenses() - this.budget_limit());
    this.isSubmitted.set(true);
	}
}
