import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cardsWithDetails:string="";
  ActiveTab:string="search";

  switchRouterToCities(val:string){/////////////////////////
    this.ActiveTab="cities";
    this.cardsWithDetails=val;
    console.log("switchRouterToCities in app component "+val);
  }

}
