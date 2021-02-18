import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html'
})
export class HeroeComponent{
    
    nombre:string='Ironman';
    edad:number=45;
    get NombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    ObtenerNombre():string{
        return `${this.nombre}---${this.edad}`;
    }
    
    CambiarNombre(){
        this.nombre='spiderman';
    }
    CambiarEdad(){
        this.edad=32;
    }
    
}