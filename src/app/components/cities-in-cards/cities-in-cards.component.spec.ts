import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesInCardsComponent } from './cities-in-cards.component';

describe('CitiesInCardsComponent', () => {
  let component: CitiesInCardsComponent;
  let fixture: ComponentFixture<CitiesInCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesInCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesInCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
