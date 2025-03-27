import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartRatingComponent } from './flipkart-rating.component';

describe('FlipkartRatingComponent', () => {
  let component: FlipkartRatingComponent;
  let fixture: ComponentFixture<FlipkartRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
