import { Routes } from '@angular/router';
import { SearchComponent } from '../search/search.component'
import {CitiesInCardsComponent } from '../cities-in-cards/cities-in-cards.component';
import{CityDetailsComponent } from '../city-details/city-details.component';

export const RouteArr: Routes = [

    { path: 'search', component: SearchComponent },
  //  {path:'cities-in-cards',component:CitiesInCardsComponent},
    {path:'cities-in-cards/:cityName',component:CitiesInCardsComponent},
   // {path:'city-details',component:CityDetailsComponent},
    {path:'city-details/:semel_yeshuv',component:CityDetailsComponent},
    {path:'',redirectTo:'/search',pathMatch:'full'}
   
];