import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-to-preview',
  templateUrl: './radio-to-preview.component.html',
  styleUrls: ['./radio-to-preview.component.css']
})
export class RadioToPreviewComponent implements OnInit {

  @Output()
  toPrev: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  chooseToPre(val: string) {
    this.toPrev.emit(val);
  }
}
