import { Component, DoCheck, OnInit } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item>
  itemParaSerEditado!: Item

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra()
    console.log(this.listaDeCompra)
  }

  ngDoCheck(): void {
    console.log('DoCheck foi chamado')
    this.listaService.atualizarLocalStorage()
  }

  editarItem(item: Item){
    this.itemParaSerEditado = item
  }

  deletarItem(id: number){
    console.log(`ID a ser deletado ${id}`)
    const index = this.listaDeCompra.findIndex((item)=> item.id === id)
    this.listaDeCompra.splice(index,1)
  }

  limparLista(){
    this.listaDeCompra = []
  }
}
