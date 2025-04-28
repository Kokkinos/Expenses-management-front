import { Component, inject, OnInit, signal } from '@angular/core';
import { TotalService } from '../../services/total.service';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TotalFilter } from '../../models/total-filter';


@Component({
  selector: 'app-total-amount',
  imports: [DropdownModule, FormsModule],
  templateUrl: './total-amount.component.html',
  styleUrl: './total-amount.component.css'
})
export class TotalAmountComponent implements OnInit{
  private totalService = inject(TotalService);
  totalAmountSpent = this.totalService.totalAmount;
  expenses = this.totalService.expenses;
  selectedFilter = "all";

  filterOptions = [
    {label: 'All', value: 'all'},
    {label: 'Last 7 days', value:'last-week'},
    {label: 'Last 30 days', value: 'last-month'}
  ]

  // constructor(private totalService: TotalService) {
  //   this.totalAmountSpent.update(value => value + this.totalService.totalAmount());
  // }
  ngOnInit(): void {
    this.totalAmountSpent.update(() => {
      return this.totalService.getFilteredTotal(TotalFilter.ALL);
    });
  }

  // onChangeFilter() {
  //   this.totalAmountSpent.update(() => {
  //     switch (this.selectedFilter) {
  //       case 'all':
  //         return this.totalService.getFilteredTotal(TotalFilter.ALL);
  //       case 'last-week':
  //         return this.totalService.getFilteredTotal(TotalFilter.LAST_WEEK);
  //       case 'last-month':
  //         return this.totalService.getFilteredTotal(TotalFilter.LAST_MONTH);
  //       default:
  //         return this.totalService.totalAmount();
  //     }
  // });
    
  // }

  onChangeFilter() {
    let filterType: TotalFilter;

    switch(this.selectedFilter) {
      case 'all':
        filterType = TotalFilter.ALL;
        break;
      case 'last-week':
        filterType = TotalFilter.LAST_WEEK;
        break;
      case 'last-month':
        filterType = TotalFilter.LAST_MONTH;
        break;
      default:
        filterType = TotalFilter.ALL;
        break;
    }

    this.totalAmountSpent.update(() => {
      return this.totalService.getFilteredTotal(filterType);
    });

    // this.totalService.getFilteredExpenses(filterType);
    
  }

  // onAddAmount() {
  //   this.totalService.totalAmount;
  //   // this.totalAmount.update((oldAmount)=> this.totalAmount + this.totalService.totalAmount());
  // }
}
