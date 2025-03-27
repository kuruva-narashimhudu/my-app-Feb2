import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flipkart-rating',
  templateUrl: './flipkart-rating.component.html',
  styleUrls: ['./flipkart-rating.component.css']
})
export class FlipkartRatingComponent {
   @Input() rating:number=0;
   

}
