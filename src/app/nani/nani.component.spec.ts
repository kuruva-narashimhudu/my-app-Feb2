import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaniComponent } from './nani.component';

describe('NaniComponent', () => {
  let component: NaniComponent;
  let fixture: ComponentFixture<NaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
