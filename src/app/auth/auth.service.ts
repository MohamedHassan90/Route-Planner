import * as fireBase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token: string;  // This field is used to store the token ID of the logged_In user. It is used for future communication with backend

  constructor( private router: Router) {}

  /* This method is called when a user hits the Sign up button,
  User is registered if not registered previously and then navigated to the Display page where user can load previous plans
  */
  signUpUser(email: string, password: string) {
    fireBase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => alert('Success: Your email is registered successfully'))
      .then( response => this.router.navigate(['/signIn']))
      .catch(error => alert(error));
  }

  /*
    This method is used to authenticate the user upon signing in. If login is successful, It gets the TokenID of the current user
    and stores it in the token field above Then finally navigate user to the plan page.
   */
  signInUser(email: string, password: string) {
    fireBase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => fireBase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token)
      ).then(response => this.router.navigate(['/routes']))
      .catch(
        error => alert('Error: Invalid email or password, Please try again!')
      );
  }

  // Logout method to sign out the user if user is logged in. Navigating to home-page after that.
  logout() {
    fireBase.auth().signOut();
    this.token = null;
    this.router.navigate(['/home-page']);
  }

  // This method is used by the dataStorage service in each time the http service is communicating with the back-end
  getToken() {
    fireBase.auth().currentUser.getIdToken().then((token: string) => this.token = token);
    return this.token;
  }

  /*This method is used by to show or hide features when user is authenticated
  if user is authenticated the save and load buttons will appear and vice versa
  if user is logged in the logout button will appear and vice versa
  */
  isAuthenticated() {
    return this.token != null; // Return true only if token exists (not equal to null) which mean a user is logged in.
  }


}
