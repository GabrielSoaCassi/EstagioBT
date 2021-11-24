import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.scss'],
})
export class SomaComponent {
  numero1: number;
  numero2: number;

  soma(numero1: number, numero2: number):number {
    const resultado = numero1 + numero2;
    return resultado;
  }
}
