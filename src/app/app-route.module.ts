import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanComponent} from './plan/plan.component';
import {RouteListComponent} from './route-list/route-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';

const appRoutes: Routes = [
  {path: 'home-page', component: HomePageComponent},  // home-page will load the HomePageComponent.
  {path: '', redirectTo: '/home-page', pathMatch: 'full'}, // default path '/'
  {path: 'plan', component: PlanComponent}, // /plan will load the Plan Component
  {path: 'routes', component: RouteListComponent}, // /routes will load the RouteList Component
  {path: 'signUp', component: SignupComponent},
  {path: 'signIn', component: SigninComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Registering the above paths
  exports: [RouterModule] // Exporting the RouterModule to the AppModule
})
export class AppRouteModule {
}
