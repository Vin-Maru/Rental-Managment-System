import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Import this
import { RouterModule } from '@angular/router';


@Component({
  standalone:true,
  imports:[CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10,12}$')]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { phoneNumber, password } = this.loginForm.value;
      console.log('Logging in with:', phoneNumber, password);

      // Here you can add login logic (e.g., API call)
    }
  }

  // Getter methods for validation
  get phoneNumber() {
    return this.loginForm.get('phoneNumber');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
