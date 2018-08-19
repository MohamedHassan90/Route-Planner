import {Route} from './route.model';
import {EventEmitter, Injectable} from '@angular/core';
import {FinalRoute} from './finalRoute.model';
import {st} from '@angular/core/src/render3';

export class RouteService {
  startEditing = new EventEmitter<number>();

  routes: Route[] = [
    new Route('CAIRO', 'VIENNA')
  ];

  // This method is used to get 1 route from the array of routes.
  getRoute(index: number) {
    return this.routes[index];
  }

  // This method is called when a user wants to add a route.
  addRoute(newRoute: Route) {
    let found = false; // A boolean is set to true when the route is Found
    let connectionFound = false; // A boolean which sets to true when a connection is found
    // Loop on all existing routes to check if the new Route is already added previously
    for (let i = 0; i < this.routes.length; i++) {
      if (this.routes[i].source === newRoute.source && this.routes[i].destination === newRoute.destination) {
        alert(newRoute.source + ' -> ' + newRoute.destination + ' already exist!');
        found = true;
        break;
      }
    }
    // Loop on all existing routes to check if the Berlin was added as a connection previously
    for (let i = 0; i < this.routes.length; i++) {
      if (!found && this.routes[i].source === newRoute.source) {
        alert('Warning: ' + newRoute.source + ' was already added as a connection before');
        connectionFound = true;
        break;
      }
    }

    if (!found && !connectionFound) {
      this.routes.push(newRoute);
    }
  }

  // Same Logic for addRoute, except it updates an item already exists in the array rather than adding it.
  updateRoute(index: number, newRoute: Route) {
    let found = false;
    let connectionFound = false;
    for (let i = 0; i < this.routes.length; i++) {
      if (this.routes[i].source === newRoute.source && this.routes[i].destination === newRoute.destination) {
        found = true;
        alert(newRoute.source + ' -> ' + newRoute.destination + ' already exist!');
        break;
      }
    }

    for (let i = 0; i < this.routes.length; i++) {
      if (!found && this.routes[i].source === newRoute.source && i !== index) {
        alert('Warning: ' + newRoute.source + ' was already added as a connection before');
        connectionFound = true;
        break;
      }
    }

    if (!found && !connectionFound) {
      this.routes[index] = newRoute;
    }
  }

  // This method is called for deleting a route.
  deleteRoute(index: number) {
    this.routes.splice(index, 1);
  }


  // This method is used to construct the finalRoutes by scanning all the connections between routes entered previously.
  constructFinalRoutes(finalroutes: FinalRoute[]) {
    let connectors: string[] = []; // Defining an array of multiple connections if exists!

    // Loop on All Routes which user has entered.
    for (let i = 0; i < this.routes.length; i++) {
      const currentRouteSource = this.routes[i].source; // Cairo (current src in the 1st iteration)
      let finalRouteDestination = this.routes[i].destination; // Vienna (current destination in the 1st iteration)
      if (this.checkBeforeComparing(currentRouteSource, i)) { // Before comparing routes, I will check if Cairo was compared previously.
        // Loop to check if current's destination (Vienna) is found in any of the below remaining Route's src
        for (let j = i + 1; j < this.routes.length; j++) {
          if (finalRouteDestination === this.routes[j].source) { // If Vienna is found, then push to Connectors[]
            if (!connectors.includes(this.routes[j].source)) {   // If Vienna is not already added as a connector
              connectors.push(this.routes[j].source);   // Then, Vienna is pushed
            }
            finalRouteDestination = this.routes[j].destination;  // Now, final destination is Linz
            const hop = this.routes[j].destination; // Linz is extracted
            connectors = this.checkHop(connectors, hop, j);  // ( ["Vienna"], Linz, 1 )
          }
        }

        const finalroute = new FinalRoute(currentRouteSource, connectors, finalRouteDestination);
        finalroutes.push(finalroute);
        connectors = [];  // Empty Connectors for the 2nd iteration.
      }
    }

    return finalroutes;
  }

  // This method is called internally if a connection is found, it will check if the destination is a connection as well (Recursive)
  public checkHop(connectors: string[], hop: string, index: number) {
    for (let k = index + 1; k < this.routes.length; k++) {
      if (hop === this.routes[k].source) { // If linz exists, then push it to connectors and loop again to check next hop
        if ( !connectors.includes(hop)) {
          connectors.push(hop);
          const nextHop = this.routes[k].destination; // Munich
          this.checkHop(connectors, nextHop , k);  // Recursively complete till the end of array.
        }
      }
    }
    return connectors;
  }

  // This method is called internally to check if the same source was compared before.
  public checkBeforeComparing(source: string, index: number) {
    for (let i = 0; i < index ; i++) {
      if (this.routes[i].destination === source) {
        return false;
      }
    }
    return true;
  }

}



