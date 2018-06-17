import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'fernando';
  nombreFeo = 'oscASd hernandez HerNandez';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Xavier street',
      number: 606
    }
  };

  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Llego la data'), 1500);
  });

  hoy = new Date();
}
