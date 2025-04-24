import { Routes } from '@angular/router';
import { ExpenseComponent } from './expenses/expense/expense.component';
import { PaymentsComponent } from './payments/payments.component';
import { TotalAmountComponent } from './total/total-amount/total-amount.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { BudgetComponent } from './budget/budget.component';
import { AuthComponent } from './auth/auth.component';
import { LogoutComponent } from './auth/logout/logout.component';

export const routes: Routes = [
      {path: '', component: AuthComponent},
      { path: 'dashboard-item', component: DashboardItemComponent },
      { path: 'expenses', component: ExpenseComponent },
      {path: 'total-expenses', component: TotalAmountComponent},
      // { path: 'reports', component: ReportsComponent },
      { path: 'budget', component: BudgetComponent },
      {path: 'logout', component: LogoutComponent},
      { path: '**', redirectTo: '' },
];

// {
//       "glob": "**/*",
//       "input": "public"
//     }
