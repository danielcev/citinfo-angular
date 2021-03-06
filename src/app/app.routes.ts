import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { CitiesComponent } from "./components/cities/cities.component";
import { ActivitiesComponent } from "./components/activities/activities.component";
import { ActivityComponent } from "./components/activity/activity.component";

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'activities/:id', component: ActivityComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);