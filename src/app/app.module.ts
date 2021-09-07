
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';



import { AccordionModule } from 'primeng/accordion'; 
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';



import {CalendarModule} from 'primeng/calendar';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { NgxCurrencyModule } from 'ngx-currency';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { FormsModule } from '@angular/forms';
import { LancamentosGridComponent } from './lancamentos/lancamentos-grid/lancamentos-grid.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasGridComponent } from './pessoas/pessoas-grid/pessoas-grid.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    LancamentosGridComponent,
    LancamentosPesquisaComponent,
    LancamentoCadastroComponent,
    PessoasGridComponent


  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    NgxCurrencyModule,
    InputMaskModule, 
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
