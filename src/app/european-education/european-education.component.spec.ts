import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeanEducationComponent } from './european-education.component';

describe('EuropeanEducationComponent', () => {
  let component: EuropeanEducationComponent;
  let fixture: ComponentFixture<EuropeanEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeanEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeanEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
