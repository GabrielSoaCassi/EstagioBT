import { Component } from '@angular/core';

@Component({
  selector: 'app-divisao',
  templateUrl: './divisao.component.html',
  styleUrls: ['./divisao.component.scss'],
})
export class DivisaoComponent {
  dividendo: number;
  divisor: number;
  divisao: any;

  dividir(dividendo: number, divisor: number): void {
    if (!divisor) {
      throw Error('Impossivel dividir por 0');
    }
    this.divisao = (dividendo / divisor).toFixed(3);
    const divisao = this.divisao
    return divisao;
  }
}
