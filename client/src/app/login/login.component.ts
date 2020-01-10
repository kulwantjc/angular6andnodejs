import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };
  
   constructor(private auth: AuthenticationService, private router: Router) {}
  login() {
    this.auth.login(this.credentials).subscribe((value) => {
      console.log("this.authlogin",value.token);
      
      //this.router.navigateByUrl('/profile', { queryParams: { valToken: value.token } });
      this.router.navigate(['/profile'], { queryParams: { token: value.token } })
    }, (err) => {
      console.error(err);
    }); 
  }
}
  