import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterprogramsComponent } from './masterprograms.component';

describe('MasterprogramsComponent', () => {
  let component: MasterprogramsComponent;
  let fixture: ComponentFixture<MasterprogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterprogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
