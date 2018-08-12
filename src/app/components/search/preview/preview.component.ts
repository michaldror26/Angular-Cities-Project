import { Component, OnInit,Input } from '@angular/core';
import { City } from '../../../classes/City.class';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input()
  choosenCity:City;
  @Input()
  detailToPreview:string;
  constructor( ) { }

  ngOnInit() {
    
    
  }

}
