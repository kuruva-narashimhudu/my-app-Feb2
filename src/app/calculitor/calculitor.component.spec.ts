import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculitorComponent } from './calculitor.component';

describe('CalculitorComponent', () => {
  let component: CalculitorComponent;
  let fixture: ComponentFixture<CalculitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
