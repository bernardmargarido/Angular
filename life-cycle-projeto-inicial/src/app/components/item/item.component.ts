import { Item } from './../../interfaces/iItem';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter()
  @Output() emitindoIdParaDeletar = new EventEmitter()

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit')
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    console.log('Classe NGONDESTROY')
  }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item)
  }

  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }

  deletarItem(){
    console.log(`Tentando deletar um item ${this.item.id}`)
    this.emitindoIdParaDeletar.emit(this.item.id)
  }



}
