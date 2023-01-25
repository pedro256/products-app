import { Component, Input, OnInit } from '@angular/core';
import NavigationItemNavbar from 'src/app/shared/view-models/navigation-item';
import defaultRoutes from '../routes/default.routes';

@Component({
  selector: 'layout-component',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  
  typeUser:string = "Default";
  routes:Array<NavigationItemNavbar> = new Array<NavigationItemNavbar>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(defaultRoutes)
    this.routes = defaultRoutes;
  }


  

}
