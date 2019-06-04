import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueWeekComponent } from './due-week.component';

describe('DueWeekComponent', () => {
  let component: DueWeekComponent;
  let fixture: ComponentFixture<DueWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
