import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../../classes/City.class';
import { IsraelCitiesService } from '../../services/israel-cities.service';

@Component({
  selector: 'app-cities-in-cards',
  templateUrl: './cities-in-cards.component.html',
  styleUrls: ['./cities-in-cards.component.css'],
})
export class CitiesInCardsComponent implements OnInit {

  citiesInCard: City[];
  constructor(private _serviceCities: IsraelCitiesService
    , private _router: Router,
    private _activateRout: ActivatedRoute) { }

  ngOnInit() {

    let name: any = this._activateRout.snapshot.params['cityName'];
    if (name == 'all' || name == undefined)
      this.citiesInCard = this._serviceCities.getAllWithImage();
    else
      this.citiesInCard = this._serviceCities.getAllCitiesBySearch(name);
  }
  goToDetais(semel_yeshuvParam: number) {
    this._router.navigate(['city-details',semel_yeshuvParam]);
  }
}
