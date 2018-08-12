import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../../classes/City.class';
import { IsraelCitiesService } from '../../services/israel-cities.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {

  cityForDetails:City;

  constructor(
    private _activateRout:ActivatedRoute,
    private _cityServise:IsraelCitiesService) {   }

  ngOnInit() {
    let num: number = this._activateRout.snapshot.params['semel_yeshuv'];
    console.log(num);
this.cityForDetails=this._cityServise.getCityById(num);
  }
}