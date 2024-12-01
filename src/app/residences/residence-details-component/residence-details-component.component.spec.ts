import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceDetailsComponentComponent } from './residence-details-component.component';

describe('ResidenceDetailsComponentComponent', () => {
  let component: ResidenceDetailsComponentComponent;
  let fixture: ComponentFixture<ResidenceDetailsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidenceDetailsComponentComponent]
    });
    fixture = TestBed.createComponent(ResidenceDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
