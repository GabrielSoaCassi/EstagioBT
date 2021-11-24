import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisaoComponent } from './divisao.component';

describe('DivisaoComponent', () => {
  let component: DivisaoComponent;
  let fixture: ComponentFixture<DivisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivisaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('_QuandoCriado', () => {
    expect(component).toBeTruthy();
  });

  it(`${DivisaoComponent.prototype.dividir.name}_QuandoDividirNumerosValidos_DeveRetornarResultado`, () => {
    const componente = new DivisaoComponent();
    componente.dividir(2, 2);
    expect(componente.divisao).toBe('1.000');
  });

  it(`${DivisaoComponent.prototype.dividir.name}_QuandoDivisorForNulo_DeveInidicarMensagemDeErro`, () => {
    expect(() => new DivisaoComponent().dividir(2, null)).toThrowError(
      'Impossivel dividir por 0'
    );
  });
});
