import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotenciaComponent } from './potencia.component';

describe('PotenciaComponent', () => {
  let component: PotenciaComponent;
  let fixture: ComponentFixture<PotenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PotenciaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('_QuandoCriado', () => {
    expect(component).toBeTruthy();
  });

  it(`${PotenciaComponent.prototype.calcular.name}_QuandoReceberNumerosValidos_DeveCalcularPotencia`, () => {
    const component = new PotenciaComponent();
    component.calcular(2, 2);
    expect(component.resultado).toBe('4.000');
  });
  it(`${PotenciaComponent.prototype.calcular.name}_QuandoReceberExpoenteZero_DeveRetornarUm`, () => {
    const component = new PotenciaComponent();
    component.calcular(2, 0);
    expect(component.resultado).toBe('1.000');
  });
});
