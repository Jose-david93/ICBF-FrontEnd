import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '@login/shared/services/register/register.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: RegisterService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.logout();
    this.initializeForm();
  }

  onSubmit(): boolean {
    if(!this.registerForm.valid) {
      return false;
    }

    this.apiService.register(this.registerForm.value).subscribe(response => {
      if(response?.token != '') {
        sessionStorage.setItem('token', response?.token);
        sessionStorage.setItem('username', response?.username);
        this.router.navigate(['/home']);
      }
    });
    return true;
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });
  }

}
