import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  constructor() { }

  heroes:string[]=['spiderman','thor','linterna','hulk'];
  borrado:string='';

  BorrarHeroe(){
    let palabra=this.heroes.shift() ||'';
    this.borrado=palabra;
    console.log(this.borrado);

  }

}
