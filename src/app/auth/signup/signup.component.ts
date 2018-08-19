import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') form: NgForm; // Capturing the form

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // This method accesses the AuthService to register the user.
  onSignUp() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.authService.signUpUser(email, password);
  }

}
