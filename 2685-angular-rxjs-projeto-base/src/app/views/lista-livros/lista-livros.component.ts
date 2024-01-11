import { FormControl } from '@angular/forms';
import { Item } from './../../models/interfaces';
import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';
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
  //subscription: Subscription
  //livro: Livro

  constructor(private service: LivroService) {}

  livrosEncontrados$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(pausa),
      filter((valorDigitado) => valorDigitado.length >= 3),
      tap(() => console.log('Fluxo Inicial')),
      distinctUntilChanged(),
      switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
      tap((retronoAPI) => console.log('Requisicao ao servidor', retronoAPI)),
      map((items) => this.livrosResultadoParaLivros(items))
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



