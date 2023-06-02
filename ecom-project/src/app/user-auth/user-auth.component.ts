import { Component,OnInit } from '@angular/core';
import { signup } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit{
  constructor(private user:UserService){}

  ngOnInit(): void {
    this.user.userAuthreload();
  }
  signup(data:signup){
  //console.warn(data)
  this.user.userSignUp(data)
  }
}
