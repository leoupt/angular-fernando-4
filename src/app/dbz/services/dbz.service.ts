import { Injectable } from '@angular/core';
import { Heroe } from '../Interface/dbz.interface';
 

@Injectable()
export class DbzService {
    
    private _personajes:Heroe[]=[
        {nombre:'goku',
          poder:2000
        },
        {
          nombre:'vegeta',
          poder:1000
        }
      ]
      get personajes():Heroe[]{
          return [...this._personajes];
      }

      agregarPersonaje(personaje:Heroe){
          this._personajes.push(personaje);
      }
}