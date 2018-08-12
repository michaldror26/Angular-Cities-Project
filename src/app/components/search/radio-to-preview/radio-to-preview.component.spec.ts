import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioToPreviewComponent } from './radio-to-preview.component';

describe('RadioToPreviewComponent', () => {
  let component: RadioToPreviewComponent;
  let fixture: ComponentFixture<RadioToPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioToPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioToPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
