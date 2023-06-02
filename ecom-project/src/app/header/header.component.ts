import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType:string='default';
  sellerName:string=''
  searchResult:undefined | product[]
  constructor(private router:Router, private product:ProductService){

}
ngOnInit(): void {

  this.router.events.subscribe((val:any)=>{
    if(val.url){
     //console.warn(val.url)
      if(localStorage.getItem('seller') && val.url.includes('seller')){
        //console.warn("i am in seller area")
        this.menuType="seller";
        if(localStorage.getItem('seller')){
          let sellerStore=localStorage.getItem('seller')
          let sellerData=sellerStore && JSON.parse(sellerStore)[0];//error is occur while signup
          this.sellerName=sellerData.name;//error is occur while signup
          //console.log(sellerData)//error is occur while signup
        }
        
      }else{
        //console.warn("out side seller")
        this.menuType='default'
      }
    }
  })
}
logout(){
  localStorage.removeItem('seller')
  this.router.navigate(['/'])
}
searchProducts(query:KeyboardEvent){
  if(query){
    const element=query.target as HTMLInputElement; 
    this.product.searchProducts(element.value).subscribe((result)=>{
      //console.warn(result)
      if(result.length>5){
        result.length=5
      }
      
      this.searchResult=result
    })
  }

}
hideSearch(){
  this.searchResult=undefined 
}
submitSearch(val:string){

this.router.navigate([`search/${val}`])

} 
redirectTodetials(id:number){
  this.router.navigate(['/details/'+id])
}
 
}
