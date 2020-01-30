import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeanCompaniesComponent } from './european-companies.component';

describe('EuropeanCompaniesComponent', () => {
  let component: EuropeanCompaniesComponent;
  let fixture: ComponentFixture<EuropeanCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeanCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeanCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
