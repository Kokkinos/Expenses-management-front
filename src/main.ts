import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { ExpenseComponent } from './app/expenses/expense/expense.component';
import { PaymentsComponent } from './app/payments/payments.component';


// const routes: Routes = [
//   { path: '', component: ExpenseComponent },
//   { path: 'expenses', component: ExpenseComponent },
//   { path: 'payments', component: PaymentsComponent },
//   // { path: 'reports', component: ReportsComponent },
//   // { path: 'settings', component: SettingsComponent },
//   { path: '**', redirectTo: '' } // Redirects unknown routes
// ];


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
