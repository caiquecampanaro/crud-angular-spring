import { Component, OnInit } from '@angular/core';
import { Produto } from './model/produto';
import { ProdutosService } from '../servicos/produtos.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos$: Observable<Produto[]>;

  displayedColumns = ['nome', 'categoria', 'preco', 'acoes'];

  constructor(private ProdutosService: ProdutosService, public dialog: MatDialog,
     private router: Router, private route: ActivatedRoute ) {
    this.produtos$ = this.ProdutosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar produtos');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route} );
  }
}
