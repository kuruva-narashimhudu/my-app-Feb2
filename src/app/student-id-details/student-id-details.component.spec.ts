import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIdDetailsComponent } from './student-id-details.component';

describe('StudentIdDetailsComponent', () => {
  let component: StudentIdDetailsComponent;
  let fixture: ComponentFixture<StudentIdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIdDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentIdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
