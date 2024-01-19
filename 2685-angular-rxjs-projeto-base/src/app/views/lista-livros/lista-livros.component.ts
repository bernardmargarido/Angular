import { FormControl } from '@angular/forms';
import { Item, LivrosResultado } from './../../models/interfaces';
import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap, throwError, catchError, EMPTY, of } from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const pausa = 300
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  //listaLivros: Livro[];
  campoBusca = new FormControl()
  mensagemErro = ''
  livrosResultado: LivrosResultado

  //subscription: Subscription
  //livro: Livro

  constructor(private service: LivroService) {}

  /*
  totalDeLivros$ = this.campoBusca.valueChanges
  .pipe(
    debounceTime(pausa),
    filter((valorDigitado) => valorDigitado.length >= 3),
    tap(() => console.log('Fluxo Inicial')),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
    map(resultado => this.livrosResultado = resultado),
    catchError(erro => {
      console.log(erro)
      return of()
    })
    )
  */
 
  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
      debounceTime(pausa),
      tap(() => { 
          console.log('Fluxo Inicial')
      }),
      filter((
          valorDigitado) => valorDigitado.length >= 3
      ),
      //distinctUntilChanged(),
      switchMap(
        (valorDigitado) => this.service.buscar(valorDigitado)
      ),
      //tap((retronoAPI) => console.log('Requisicao ao servidor', retronoAPI)),
      map(
          resultado => this.livrosResultado = resultado
      ),
      map(
          resultado => resultado.items ?? []
      ),
      map(
          (items) => this.livrosResultadoParaLivros(items)
      ),
      catchError(erro => {
        //this.mensagemErro = 'Ops, ocorreu um erro, Recarregue a aplicacao!'
        //return EMPTY
        console.log(erro)
        return throwError( () => new Error(this.mensagemErro = 'Ops, ocorreu um erro, Recarregue a aplicacao.'))
      })
      //(items) => this.listaLivros = this.livrosResultadoParaLivros(items))
    )
  /*
  buscarLivros(){
    this.subscription = this.service.buscar(this.campoBusca).subscribe({
        next: (items) => {
          console.log('Requisicoes ao servidor')
          this.listaLivros = this.livrosResultadoParaLivros(items)
        },
        error: error => console.error(error),
      })
  }
  */

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item =>{
      return new LivroVolumeInfo(item)
    })
  }

  /*
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  */
}



