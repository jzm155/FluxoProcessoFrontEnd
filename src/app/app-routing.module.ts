import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from './pessoas/pessoas.component';
import { FluxosComponent } from './fluxos/fluxos.component';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';

const routes: Routes = [
  {
    path: 'pessoas', component: PessoasComponent,
  },
  { path: 'cadastro-pessoas', component: CadastroPessoasComponent },
  { path: 'cadastro-pessoas/:id', component: CadastroPessoasComponent },
  { path: 'avaliacoes', component: AvaliacoesComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'fluxos', component: FluxosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
