import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IsraelCitiesService } from '../../../services/israel-cities.service';
import { City } from '../../../classes/City.class';


@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  citiesDetailsArr: City[];
  selectedIndex: number = 0;
  selectedCityName: string = "";

  @Output()
  switchRouter: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  preview: EventEmitter<City> = new EventEmitter<City>();

  constructor(private _isrelCitiesService: IsraelCitiesService) { }

  ngOnInit() {
  }

  searchCityies(event: KeyboardEvent) {
    if (event.keyCode == 40) {
      if (this.selectedIndex < this.citiesDetailsArr.length - 1)
        this.selectedCityName = this.citiesDetailsArr[++this.selectedIndex].name;
      return  this.previewFunc();
    }

    if (event.keyCode == 38) {
      if (this.selectedIndex > 0)
        this.selectedCityName = this.citiesDetailsArr[--this.selectedIndex].name;
      return this.previewFunc();
    }
    if (event.keyCode == 13)//to do
    {
      this.citiesDetailsArr = [];
      return this.switchRouter.emit((<HTMLInputElement>event.target).value);
    }
 this.selectedIndex = 0;
    this.citiesDetailsArr = this._isrelCitiesService.getAllCitiesBySearch((<HTMLInputElement>event.target).value);
   
  }

previewFunc()
{
  this.preview.emit(this.citiesDetailsArr[this.selectedIndex]);
}
}
