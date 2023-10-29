import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  loading = false;

  constructor(private router: Router, private loginService: LoginService) {}

  userLogin = new FormGroup({
    user: new FormControl('admin', Validators.required),
    password: new FormControl('admin', Validators.required),
  });

  onSubmit() {
    const usuario = this.userLogin.value.user || '';
    const password = this.userLogin.value.password || '';
    const isLoggedIn = this.loginService.login(usuario, password);

    if (!isLoggedIn) {
      this.userLogin.reset();
    }

    this.router.navigate(['/dashboard']);
  }
}
