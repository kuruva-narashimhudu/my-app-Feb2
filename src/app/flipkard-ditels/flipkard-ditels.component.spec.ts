import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkardDitelsComponent } from './flipkard-ditels.component';

describe('FlipkardDitelsComponent', () => {
  let component: FlipkardDitelsComponent;
  let fixture: ComponentFixture<FlipkardDitelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkardDitelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkardDitelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
