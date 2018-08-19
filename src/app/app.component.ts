import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor() {
  }


  // Connecting back-end (fireBase) with the angular app
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC1Cym3qUAgf5PqaQYZkjb_ANf52rbrL_I',
      authDomain: 'ng-route-planner.firebaseapp.com'
    });
  }

}



