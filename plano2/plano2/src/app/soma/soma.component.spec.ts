import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomaComponent } from './soma.component';

describe('SomaComponent', () => {
  let component: SomaComponent;
  let fixture: ComponentFixture<SomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${SomaComponent.prototype.soma.name}_QuandoReceberNumeros_DeveRetornarResultado`, () => {
    const componente = new SomaComponent()
    expect(componente.soma(2,2)).toBe(4)

  })
});
