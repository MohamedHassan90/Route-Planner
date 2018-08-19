import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // This method accesses the AuthService to logout the user.
  onLogOut() {
    this.authService.logout();
  }

  // This method is just used to call the isAuthenticated() method in the AuthService
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
