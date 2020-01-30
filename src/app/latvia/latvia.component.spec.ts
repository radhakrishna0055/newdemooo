import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatviaComponent } from './latvia.component';

describe('LatviaComponent', () => {
  let component: LatviaComponent;
  let fixture: ComponentFixture<LatviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
