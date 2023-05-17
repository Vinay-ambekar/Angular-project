import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() sideNavStatus:boolean=false;
  list=[
    {
      number:'1',
      name:'Side Nav Bar',
      icon:'fa-solid fa-house',
    },
  /*   {
      number:'1',
      name:'work',
      icon:'fa-solid fa-house',
    } */
  ]

}
