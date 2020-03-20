import { Component, OnInit } from '@angular/core';
import set = Reflect.set;
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class CartaComponent implements OnInit {
  cartas: any[];

  constructor(public auth: AuthService) {
    const carta1 = {
      cartalist: 'tortilla',
      descripcion: 'Francesa',
      leido: true
    };
    const carta2 = {
      cartalist: 'choripan',
      descripcion: 'Androlla',
      leido: false
    };
    this.cartas = [];
    this.cartas.push(carta1);
    this.cartas.push(carta2);


  }

  ngOnInit(): void {

  }

  cambio(lista) {
    lista.comprado = !lista.comprado;

  }
}
