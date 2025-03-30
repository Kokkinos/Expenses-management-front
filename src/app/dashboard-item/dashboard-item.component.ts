import { Component, input } from '@angular/core';
import { PaymentsComponent } from '../payments/payments.component';
import { TotalAmountComponent } from '../total/total-amount/total-amount.component';
import { PaymentType } from '../models/payment-type';
import { ExpenseComponent } from '../expenses/expense/expense.component';


@Component({
  selector: 'app-dashboard-item',
  imports: [PaymentsComponent, TotalAmountComponent, ExpenseComponent],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // title = input.required<string>();
  PaymentType =  PaymentType;
}
