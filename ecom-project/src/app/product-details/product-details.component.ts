import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productData:undefined | product

constructor(private activatedRoute: ActivatedRoute, private product:ProductService){

}

ngOnInit(): void {
   let productId=this.activatedRoute.snapshot.paramMap.get('productId');
 console.warn(productId) 
 productId && this.product.getProduct(productId).subscribe((result)=>{
  console.warn(result)
  this.productData=result 
 }) 



 
}
}
  