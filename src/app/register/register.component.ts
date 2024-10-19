// register.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  imports:[ReactiveFormsModule,
    CommonModule
  ],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // Reactive Form Definition
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    secondName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]), // Phone number validation
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  // Form Submission Handler
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Handle form submission (API call etc.)
    } else {
      console.log("Form is not valid");
    }
  }
}
