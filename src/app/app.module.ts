import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { MenuComponent } from './menu/menu.component';
import { FluxosComponent } from './fluxos/fluxos.component';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { CoreTextfieldComponent } from './core/core-textfield/core-textfield.component';
import { CoreComboboxComponent } from './core/core-combobox/core-combobox.component';
import { CoreDatefieldComponent } from './core/core-datefield/core-datefield.component';
import { CoreButtonComponent } from './core/core-button/core-button.component';
import { CoreGridComponent } from './core/core-grid/core-grid.component';
import { CoreLoadboxComponent } from './core/core-loadbox/core-loadbox.component'

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    MenuComponent,
    FluxosComponent,
    AvaliacoesComponent,
    RelatoriosComponent,
    CadastroPessoasComponent,
    CoreTextfieldComponent,
    CoreComboboxComponent,
    CoreDatefieldComponent,
    CoreButtonComponent,
    CoreGridComponent,
    CoreLoadboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
