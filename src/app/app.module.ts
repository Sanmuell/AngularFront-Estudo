import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion'; // accordion and accordion tab          // api
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
