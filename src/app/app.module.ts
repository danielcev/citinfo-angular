import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { moresearchComponent } from './components/home/moresearch/moresearch.component';
import { MostpopactivitiesComponent } from './components/home/mostpopactivities/mostpopactivities.component';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ActivityComponent } from './components/activity/activity.component';
import { MYCONFIG } from './myconfig';

// Google Maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    moresearchComponent,
    MostpopactivitiesComponent,
    HomeComponent,
    CitiesComponent,
    ActivitiesComponent,
    FooterComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    AgmCoreModule.forRoot({
      apiKey: MYCONFIG.apikey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
