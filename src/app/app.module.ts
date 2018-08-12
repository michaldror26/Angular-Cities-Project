import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './components/app/app.component';
import { RouteArr } from './components/router/route.arr';
import { RouterComponent } from './components/router/router.component';

import {IsraelCitiesService} from './services/israel-cities.service'

import { SearchComponent } from './components/search/search.component';
import { CitiesInCardsComponent } from './components/cities-in-cards/cities-in-cards.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { AutoCompleteComponent } from './components/search/auto-complete/auto-complete.component';
import { PreviewComponent } from './components/search/preview/preview.component';
import { RadioToPreviewComponent } from './components/search/radio-to-preview/radio-to-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RouterComponent,
    CitiesInCardsComponent,
    CityDetailsComponent,
    AutoCompleteComponent,
    PreviewComponent,
    RadioToPreviewComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(RouteArr, { useHash: true }),
    HttpModule 
  ],
  providers: [IsraelCitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
