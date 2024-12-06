import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from '../produtos/model/produto';
import { tap,first, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '/assets/produtos.json';

  constructor( private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Produto[]>(this.API)
    .pipe(
      first(),
      delay(500),
      tap( produtos => console.log(produtos))
    );
  }
}
