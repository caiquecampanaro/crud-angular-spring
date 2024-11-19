import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from '../model/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient: HttpClient) { }

  list(): Produto[] {
    return [
      {_id: '1', nome: 'Balinha', categoria: 'Ilicítos', preco: 20},
      {_id: '1', nome: 'Bolonha', categoria: 'Ilicítos', preco: 15},
      {_id: '1', nome: 'Lolo', categoria: 'Ilicítos', preco: 25},
      {_id: '1', nome: 'Tadalafila', categoria: 'Ilicítos', preco: 60}
    ];
  }
}
