import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { City } from '../classes/City.class';

@Injectable()
export class IsraelCitiesService {

  citiesArr: City[];

  constructor(private _http: Http) {
    this._http.get("./assets/israel-cities.json")
      .subscribe((res: Response) => this.citiesArr = <City[]>res.json());

  }
  // getAllCitiesDetails(): Observable<City[]> {
  //   return this._http
  //     .get("./assets/israel-cities.json")
  //     .map((res: Response) => <City[]>res.json());
  // }

  getAllCitiesDetails(): City[] {
    return this.citiesArr;
  }

  getAllCitiesBySearch(val: string): City[] {
    if (val != "")
      return this.citiesArr.filter(x => x.name.startsWith(val));
    return [];
  }
  getAllWithImage(){
    return this.citiesArr.filter(x => x.img!="");
  }
  getCityById(numId:number):City{
    return this.citiesArr.filter(x => x.semel_yeshuv==numId)[0];
  }
}