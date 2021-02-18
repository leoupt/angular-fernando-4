import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`<h1>ola k haces</h1>
    <h2>{{title}}</h2>
    
    
    <h2>Demostracion</h2>
    
    <button (click)='Aumentando(1)'>+1</button>
    <div>
    {{numero}}
    </div>
    <button (click)='Aumentando(-1)'>-1</button>`
})
export class ContadorComponent{
    title:string = 'bases';
  numero:number=10;
  Base:number=5;
  Acumulado:number=0;
  Aumentando(acumulador:number){
    this.numero+=acumulador;
  }
  Acumulador(numero:number){
    this.Acumulado+=numero;
  }
}