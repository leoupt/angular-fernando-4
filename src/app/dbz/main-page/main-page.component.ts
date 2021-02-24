import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../Interface/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  
  nuevo:Heroe={
    nombre:'maestro roshci',
    poder:400
  };
  
  
}
