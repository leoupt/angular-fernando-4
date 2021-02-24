import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../Interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

    get personajes(){
      return this.dbzservice.personajes;
    };

    constructor(private dbzservice:DbzService){

    }
}
