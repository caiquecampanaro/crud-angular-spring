import { Component, OnInit } from '@angular/core';

import { Produto } from '../model/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [
    {_id: '1', nome: 'Balinha', categoria: 'Ilicítos', preco: 20},
    {_id: '1', nome: 'Bolonha', categoria: 'Ilicítos', preco: 15},
    {_id: '1', nome: 'Lolo', categoria: 'Ilicítos', preco: 25},
    {_id: '1', nome: 'Tadalafila', categoria: 'Ilicítos', preco: 60},
  ];
  colunasProdutos = ['nome', 'categoria', 'preco'];

  constructor() {
    // this.produtos = [];
   }

  ngOnInit(): void {
  }

}
