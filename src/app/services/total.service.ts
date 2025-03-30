import { inject, Injectable, signal } from "@angular/core";
import { Expense } from "../models/expense";
import { TotalFilter } from "../models/total-filter";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class TotalService {
    totalAmount = signal(0);
    specificAmount = signal<Expense>({label: '', amount: 0});
    error = signal('');
    private expensesList = signal<Expense[]>([]);
    private totalFilter = TotalFilter.LAST_WEEK;
    private today = new Date();
    private httpClient = inject(HttpClient);

    get expenses() {
        this.httpClient.get<Expense[]>('http://localhost:8080/separate_expenses').subscribe({
            next: (resData) => {
                this.expensesList.set(resData);
            },
            error: (error) => {
                console.error(error.message);
                this.error.set("Something went wrong fetching expenses. Please try again later.");
            }
        });
        return this.expensesList;
    }

    addAmount(enteredAmount: number) {
        this.totalAmount.update((oldAmount) => oldAmount + enteredAmount);
        // console.log(this.totalAmount());
    }

    addSpecificAmount(label: string, amount: number) {
        this.httpClient.post('http://localhost:8080/add_expense', {
            label: label,
            amount: amount
        }).subscribe({
            next: (resData) => console.log(resData),
            error: (error) => {
                console.log(error.message);
                this.error.set('Something went wrong adding the amount. Please try again later.');
            }
        });

        this.expensesList.update(prevExpenses => {
            const existingExpense = prevExpenses.find(exp => exp.label === label);

            if (existingExpense) {
                return prevExpenses.map(exp => exp.label === label ? {...exp, amount: exp.amount + amount} : exp);
            } 
            else {
                return [...prevExpenses, {label, amount}];
            }
        })
        console.log(this.expensesList());
    }

    getFilteredTotal(filter: TotalFilter) {
        this.httpClient.get<number>('http://localhost:8080/total', {params: {filter: filter}}).subscribe({
            next: (res) => {
                this.totalAmount.set(res);
            },
            error: (error) => {
                console.error(error.message);
                this.error.set("Something went wrong fetching total amount. Please try again later.");
            }
        });
       
        return this.totalAmount();
    }
}