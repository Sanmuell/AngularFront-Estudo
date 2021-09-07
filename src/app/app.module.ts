import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PessoasModule } from './pessoas/pessoas.module';



@NgModule({
  declarations: [
    AppComponent

  ],

  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  LancamentosModule,
  PessoasModule,
  CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
