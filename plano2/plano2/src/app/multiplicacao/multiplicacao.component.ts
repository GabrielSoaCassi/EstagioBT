import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacao',
  templateUrl: './multiplicacao.component.html',
  styleUrls: ['./multiplicacao.component.scss'],
})
export class MultiplicacaoComponent {
  multiplicando: number;
  multiplicador: number;
  resultado: any = 0;

  multiplicar(multiplicador: number, multiplicando: number): void {
    this.resultado = (multiplicando * multiplicador).toFixed(3);
    const resultado = this.resultado
    return resultado;
  }
}
