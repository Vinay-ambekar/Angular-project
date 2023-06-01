import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { OnInit } from '@angular/core';
import { product } from '../data-type';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
	popularProducts:undefined | product[]
	//images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(private product:ProductService) {
		
	}
  ngOnInit(): void {
     this.product.popularProducts().subscribe((data)=>{
     console.warn(data)
     this.popularProducts=data
     })
  }
}

