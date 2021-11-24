import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacaoComponent } from './multiplicacao.component';

describe('MultiplicacaoComponent', () => {
  let component: MultiplicacaoComponent;
  let fixture: ComponentFixture<MultiplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiplicacaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('_QuandoCriado', () => {
    expect(component).toBeTruthy();
  });

  it(`${MultiplicacaoComponent.prototype.multiplicar.name}_QuandoParametrosValidos_DeveRetornarValorCorreto`, () => {
    const componente = new MultiplicacaoComponent();
    componente.multiplicar(2, 2);
    expect(componente.resultado).toBe('4.000');
  });

  it(`${MultiplicacaoComponent.prototype.multiplicar.name}_QuandoParametrosNulos_DeveRetornarZero`, () => {
    const componente = new MultiplicacaoComponent();
    componente.multiplicar(null, null);
    expect(componente.resultado).toBe('0.000');
  });
});
