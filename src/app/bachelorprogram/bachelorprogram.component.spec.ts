import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BachelorprogramComponent } from './bachelorprogram.component';

describe('BachelorprogramComponent', () => {
  let component: BachelorprogramComponent;
  let fixture: ComponentFixture<BachelorprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachelorprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BachelorprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
