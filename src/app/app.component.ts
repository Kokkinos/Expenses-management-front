import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { HeaderComponent } from './header/header.component';
import { TotalAmountComponent } from './total/total-amount/total-amount.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardItemComponent, HeaderComponent, TotalAmountComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'paymentsManagement';
}
