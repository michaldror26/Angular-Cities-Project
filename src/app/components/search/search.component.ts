import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { City } from '../../classes/City.class';
import { Router } from '@angular/router';
import { RouterComponent } from '../router/router.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  @Output()
  choosenCity: City;
@Input()
  detailToPreview: string;

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  switchRouterFunc(val: string) {
    this._router.navigate(['cities-in-cards', val]);
  }

  goToPreview(city: City) {
    this.choosenCity = city;
  }
  previewByThat(detailToPreview: string) {
    this.detailToPreview = detailToPreview;
  }
}
