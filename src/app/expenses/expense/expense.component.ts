import { Component, inject, Input, OnInit } from '@angular/core';
import { TotalService } from '../../services/total.service';


@Component({
  selector: 'app-expense',
  imports: [],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent implements OnInit{
	private totalService = inject(TotalService);
	// expense = this.totalService.specificAmount;
  expenses = this.totalService.expenses;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
