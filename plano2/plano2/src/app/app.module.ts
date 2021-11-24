import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MultiplicacaoComponent } from './multiplicacao/multiplicacao.component';
import { DivisaoComponent } from './divisao/divisao.component';
import { PotenciaComponent } from './potencia/potencia.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SomaComponent } from './soma/soma.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplicacaoComponent,
    DivisaoComponent,
    PotenciaComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SomaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
