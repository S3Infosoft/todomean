import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueMonthComponent } from './due-month.component';

describe('DueMonthComponent', () => {
  let component: DueMonthComponent;
  let fixture: ComponentFixture<DueMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
