import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './../app-routing.module';
import { PessoaCadastroComponent } from './../pessoa-cadastro/pessoa-cadastro.component';
import { PessoasGridComponent } from './../pessoas-grid/pessoas-grid.component';
import { PessoasPesquisaComponent } from './../pessoas-pesquisa/pessoas-pesquisa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { NgxCurrencyModule } from 'ngx-currency';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  PessoasPesquisaComponent,
  PessoasGridComponent,
  PessoaCadastroComponent

  ],

exports:[
   PessoaCadastroComponent,
   PessoasPesquisaComponent

],


  imports: [
    CommonModule,
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
  ]
})
export class PessoasModule { }
