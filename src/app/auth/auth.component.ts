import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule, ButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  private authService = inject(AuthService);
  selectedAction: 'login' | 'signup' = 'login';
  errorMessage = this.authService.errorMessage;

  authForm = new FormGroup({
    username: new FormControl("", {
      validators: [Validators.required]
    }),
    password: new FormControl("", {
      validators: [Validators.required]
    })
  })

  setAction(action: 'login' | 'signup') {
    this.selectedAction = action;
  }

  onSubmit() {
    const username = this.authForm.value.username!;
    const password = this.authForm.value.password!;
    if (this.selectedAction === 'login') {
      this.authService.login(username, password);
    } else {
      this.authService.signup(username,password);
    }
    
  }

}
