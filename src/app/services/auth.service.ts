import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../auth/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private httpClient = inject(HttpClient);
    private router = inject(Router)
    error = signal('');
    user = signal<User | null>(null);



    login(username: string, password: string) {
        this.httpClient.post<{token: string, expirationDate: number}>('http://localhost:8080/login', {
          username: username,  
          password: password
        }).subscribe({
            next: (res) => {
                localStorage.setItem('token', res.token);
                const expirationDate = new Date(res.expirationDate);
                const userLogged = new User(username, password, res.token, expirationDate);
                this.user.set(userLogged);
                this.router.navigate(['/dashboard-item']);
            },
            error: (error) => {
                console.log(error.message);
                this.error.set("Invalid credentials. Please try again!");
            }
        })
    }

    signup(username: string, password: string) {
        // this.router.navigate(['/dashboard-item']);
        this.httpClient.post('http://localhost:8080/signup', {
          username: username,  
          password: password
        }).subscribe({
            next: (user) => {
                console.log(user);
                //redirect 
            },
            error: (error) => {
                console.log(error.message);
                this.error.set("Something went wrong sign you up. Please try again later.");
            }
        })
    }

    logout() {
        localStorage.removeItem('token');
        this.user.set(null);
    }
}