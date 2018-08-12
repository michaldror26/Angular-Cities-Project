import { Component, OnInit, Input} from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})

export class RouterComponent implements OnInit {
  @Input()
  ActiveTab: string = "search";

  constructor() { }

  ngOnInit() {
  }

  setActiveTab(activeTab:string)
  {
    this.ActiveTab=activeTab;
  }
 
}
