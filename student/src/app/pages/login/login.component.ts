import { Component ,EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 @Input() appear: boolean = false;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>(); 

  email:string=''
  password:string=''

  onButtonClick(): void {
     if(this.email=="admin@gmail.com"&&this.password=="Admin"){
      this.buttonClick.emit();
      /* alert('you are loged in') */
    }else{
      alert('invalid credential')
    } 
     
  }
}
