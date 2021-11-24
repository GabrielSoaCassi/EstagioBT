import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.scss'],
})
export class PotenciaComponent {
  base: number;
  expoente: number;
  resultado: any;

  calcular(base: number, expoente: number): void {
    this.resultado = Math.pow(base, expoente).toFixed(3);
    const resultado = this.resultado
    return resultado
  }
}
