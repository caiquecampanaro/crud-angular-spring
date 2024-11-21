import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Produto } from '../model/produto';
import { ProdutosService } from '../servicos/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  produtos$: Observable<Produto[]>;
  colunasProdutos = ['nome', 'categoria', 'preco'];

  constructor(
    private ProdutosService: ProdutosService,
    public dialog: MatDialog
  ) {
    this.produtos$ = this.ProdutosService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar produtos');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {}
}
