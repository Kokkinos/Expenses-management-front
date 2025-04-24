import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";


@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
     private router = inject(Router);    

    // constructor(private authService: AuthService){}

    //maybe dont send when login or signup
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        //don't send the token when login or signup
        if (req.url.includes('/login') || req.url.includes('/signup')) {
            return next.handle(req);
        }
        
        const token = localStorage.getItem('token');
        



        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if(error.status === 401) {
                    localStorage.removeItem('token');
                    this.router.navigate(['']);
                }
                return throwError(() => error);
            })
        );
        // throw new Error("Method not implemented.");
    }

}