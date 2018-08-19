import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {FinalRoute} from './finalRoute.model';
import {RouteService} from './route.service';
import {AuthService} from '../auth/auth.service';

// This Class is used to store or load Plans and routes to/from the Database.
@Injectable()
export class DataStorageService {
  constructor(private http: Http , private  routeService: RouteService, private authService: AuthService) {}

  // This method will call the http service to save user's plan and routes
  storeRoutes(finalRoutes: FinalRoute[]) {
    alert('Your plan is saved!');
    const objToSend = {'Final_Plan': finalRoutes, 'All_Routes': this.routeService.routes};
    const token = this.authService.getToken();
    return this.http.put('https://ng-route-planner.firebaseio.com/plans.json?auth=' + token, objToSend);
  }

  // This method will call the http service to load user's plan and routes
  getPlan() {
    const token = this.authService.getToken();
    return this.http.get('https://ng-route-planner.firebaseio.com/plans.json?auth=' + token);
  }
}
