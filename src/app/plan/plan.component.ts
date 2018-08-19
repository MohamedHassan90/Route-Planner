import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Route} from '../shared/route.model';
import {RouteService} from '../shared/route.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit, AfterViewInit {
  @ViewChild('f') form: NgForm; // Capturing the form
  editedItemIndex: number; // Holding the index of the item user selected.
  editedItem: Route;  // The route where user is currently editing.
  editMode = false;  // By default editMode is false unless user selects the Edit button.
  routes: Route[];   // This field holds all the routes to be displayed for the user.

  // Injecting the route Service upon constructing this component.
  constructor(private routeService: RouteService, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.routes = this.routeService.routes; // Initializing the 'routes' field.
    this.routeService.startEditing.subscribe(  // Listening to startEditing Event which emits once user selects the edit button.
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.routeService.getRoute(index);
        this.form.setValue({src: this.editedItem.source, destination: this.editedItem.destination});
      });
  }

  // Optional: Just for changing the background color of the page if needed. (default is white)
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }

  // Once the form is submitted, the below methods will be called to update user's data.
  onSubmitRoute() {
    const value = this.form.value;
    if (value.src === value.destination) {
      alert('This is not a Valid Route!');
    } else {
      if (this.editMode) {
        this.routeService.updateRoute(this.editedItemIndex, new Route(value.src.toUpperCase(), value.destination.toUpperCase()));
      } else {
        this.routeService.addRoute(new Route(value.src.toUpperCase(), value.destination.toUpperCase()));
      }
    }
    this.editMode = false;
    this.form.reset();
  }

  // Emitting the event once user select an item
  onSelectItem(index: number) {
    this.routeService.startEditing.emit(index);
  }

  // Clearing the form for user. (extended feature)
  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  // When user deletes an item, routes will be updated and form is reset, editMode turned to false.
  onDelete() {
    this.routeService.deleteRoute(this.editedItemIndex);
    this.form.reset();
    this.editMode = false;
  }

}
