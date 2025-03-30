import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Expenses', icon: 'pi pi-wallet', routerLink: '/expenses' },
    { label: 'Budget', icon: 'pi pi-cog', routerLink: '/budget' },
    { label: 'Total Expenses', routerLink: '/total-expenses'}
  ];
}
