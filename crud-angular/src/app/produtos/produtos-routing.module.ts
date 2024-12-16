import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

const routes: Routes = [
  {path: '', component: ProdutosComponent},
  {path: 'new', component: ProdutoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProdutosRoutingModule { }
