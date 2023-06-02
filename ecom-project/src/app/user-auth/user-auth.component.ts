import { Component,OnInit } from '@angular/core';
import { signup } from '../data-type';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
    
  }
  signup(data:signup){
 console.warn(data)
  }
}
