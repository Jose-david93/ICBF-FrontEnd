import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@login/shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): boolean {
    if(!this.loginForm.valid) {
      return false;
    }

    this.apiService.login(this.loginForm.value).subscribe(response => {
      if(response?.token != '') {
        sessionStorage.setItem('token', response?.token);
        sessionStorage.setItem('username', response?.username);
        this.router.navigate(['/home']);
      }
    });
    return true;
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
