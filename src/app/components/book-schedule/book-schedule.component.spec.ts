import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookScheduleComponent } from './book-schedule.component';

describe('BookScheduleComponent', () => {
  let component: BookScheduleComponent;
  let fixture: ComponentFixture<BookScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
