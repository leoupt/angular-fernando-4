import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Heroe } from '../Interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input()nuevo:Heroe={
    nombre:'',
    poder:0
  };
  // @Output() onNuevoPersonaje:EventEmitter<Heroe>=new EventEmitter<Heroe>();
  constructor(private dbzService:DbzService){

  }
  agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    //this.onNuevoPersonaje.emit(this.nuevo);
    //console.log(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }
  
}
