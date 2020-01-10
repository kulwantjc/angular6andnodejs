import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
    
  };
  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    this.auth.register(this.credentials).subscribe((value) => {
      console.log('this.auth',value.token);
      //this.router.navigateByUrl('/profile');
      this.router.navigate(['/profile'], { queryParams: { token: value.token } })
    }, (err) => {
      console.error(err);
    });
  }
}

