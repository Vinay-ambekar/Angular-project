import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() sideNavToggled=new EventEmitter<boolean>()
  menustatus:boolean=false;
  SideNavToggle(){
    this.menustatus=!this.menustatus;
    this.sideNavToggled.emit(this.menustatus)
  }
}
