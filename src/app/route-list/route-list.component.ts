import {Component, OnDestroy, OnInit} from '@angular/core';
import {FinalRoute} from '../shared/finalRoute.model';
import {RouteService} from '../shared/route.service';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit, OnDestroy {
  routesDisplayed = false; // By default the routes will not be displayed till user clicks on the 'Display Routes' or 'Load my Plan' button.
  finalRoutes: FinalRoute[] = []; // This field holds the Final Routes which will be displayed to user.

  /*Injecting dataStorage Service for saving or loading the plans to/from the database.
    Also injecting routeService for constructing the finalRoutes based on the routes entered by the user previously
   */
  constructor(private dataStorageService: DataStorageService,
              private routeService: RouteService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  // If user clicked on 'Display my Current Plan' button, finalRoutes field will be constructed from the routeService
  onDisplay() {
    this.routesDisplayed = true;
    this.finalRoutes = []; // Emptying the finalRoutes array before constructing each time.
    this.finalRoutes = this.routeService.constructFinalRoutes(this.finalRoutes); // Constructing the FinalRoutes here.
  }

  // If user saved his/her plan, it will be stored in the database
  onSavePlan() {
    this.dataStorageService.storeRoutes(this.finalRoutes).subscribe(
      (response: Response) => console.log(response)
    );
  }

  // If user clicked on 'Load my previous plan', finalRoutes field will be loaded from the database.
  onLoadPlan() {
    this.dataStorageService.getPlan().subscribe(
      (response: Response) => {
        this.finalRoutes = response.json().Final_Plan;
        this.routeService.routes = response.json().All_Routes;}
      );
  }

  // This method is only used to call the isAuthenticated() method in the AuthService
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  // On Destroying this component I need to empty the finalRoutes[] array to avoid future confusions
  ngOnDestroy() {
    this.finalRoutes = [];
  }
}
