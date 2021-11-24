import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisaoComponent } from './divisao/divisao.component';
import { MainComponent } from './main/main.component';
import { MultiplicacaoComponent } from './multiplicacao/multiplicacao.component';
import { PotenciaComponent } from './potencia/potencia.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'divisao', component: DivisaoComponent },
  { path: 'multiplicacao', component: MultiplicacaoComponent },
  { path: 'potencia', component: PotenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
