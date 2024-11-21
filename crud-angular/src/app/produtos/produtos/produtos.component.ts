import { Component, OnInit } from '@angular/core';

import { Produto } from '../model/produto';
import { ProdutosService } from '../servicos/produtos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Observable<Produto[]>;
  colunasProdutos = ['nome', 'categoria', 'preco'];

  constructor(private ProdutosService: ProdutosService) {

    this.produtos = this.ProdutosService.list();
   }

  ngOnInit(): void {

  }

}
