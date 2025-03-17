import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  title = 'Flipkart';
  products = [
    { name: 'Pen', price: 20,Rating:3,FreeDelivery:false},
    { name: 'Iphone', price: 80000,Rating:5, FreeDelivery:true},
    { name: 'Shirt', price: 3000,Rating:4, FreeDelivery:true},
    { name: 'Cap', price: 4000, Rating:5, FreeDelivery:true},
    { name: 'Mobilecase', price: 199, Rating:3.5, FreeDelivery:false},
    { name: 'Remote', price: 600, Rating:3, FreeDelivery:false},
    { name: 'Watch', price: 7000, Rating:4.5, FreeDelivery:true},
  ];
  dalete(i:number){
    this.products.splice(i,1);
  
}

map(){
  this.products= this.products.map((product:any)=>{product.price= product.price+1000;
  return product;})
}
term:string='';
search(){
  this.products= this.products.filter((product:any)=>product.name.includes(this.term));
}
sort(){
  this.products.sort((a:any,b:any)=>a.price-b.price);
  console.log('sorted :price low to high',this.products);
}
sort1(){
  this.products.sort((a:any,b:any)=>b.price-a.price);
  console.log('sorted :price high to low',this.products);
}
sort2(){
  this.products.sort((a:any,b:any)=>a.Rating-b.Rating);
}
sort3(){
  this.products.sort((a:any,b:any)=>b.Rating-a.Rating);
}
sort4(){
  this.products.sort((a:any,b:any)=>a.price+b.price)
  // console.log("total price:$"+ total.toFixesed(2));
  

}

sort5(){
  this.products.sort((a:any,b:any)=>b.price-a.price);
}
reduce(){
  this.products.reduce((a:any,b:any)=>a.praduct+b.praduct)
  alert('total price is'+ 100000);
  
}
reduce1(){
  this.products.reduce((a:any,b:any)=>a.praduct+b.praduct)
  alert('totel cart iteam'+7);

  
}
add(){
  let product={name:this.name,
    price:this.price,
    Rating:this.Rating,
    FreeDelivery:this.FreeDelivery1,

    };
    this.products.push(product);

}

 filter() {
  this.products.filter((a:any)=>a.FreeDelivery=='true');
}
name:string='';
price:number=0;
Rating:number=0;
yes:boolean=true;
no:boolean=false
FreeDelivery1:boolean=true;
trueBalance(){
  this.FreeDelivery1=true;
}
falseBalance(){
  this.FreeDelivery1=false;
}
create(){
  let product={name:this.name,
    price:this.price,
    Rating:this.Rating,
    FreeDelivery:this.FreeDelivery1,
    };
    this.products.push(product);
  }
}


