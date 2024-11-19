import { Component, OnInit } from '@angular/core';

import { Produto } from '../model/produto';
import { ProdutosService } from '../servicos/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];
  colunasProdutos = ['nome', 'categoria', 'preco'];

  //ProdutosService: ProdutosService;

  constructor(private ProdutosService: ProdutosService) {
    // this.produtos = [];
    //this.ProdutosService = new ProdutosService();
    this.produtos = this.ProdutosService.list();
   }

  ngOnInit(): void {
    // ou this.produtos = this.ProdutosService.list();
  }

}
