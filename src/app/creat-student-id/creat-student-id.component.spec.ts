import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatStudentIdComponent } from './creat-student-id.component';

describe('CreatStudentIdComponent', () => {
  let component: CreatStudentIdComponent;
  let fixture: ComponentFixture<CreatStudentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatStudentIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatStudentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
