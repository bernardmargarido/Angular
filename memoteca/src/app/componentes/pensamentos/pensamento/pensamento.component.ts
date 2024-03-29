import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamentos';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Estudos Angular',
    autoria: 'Bernard',
    modelo: 'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = []

  constructor(private service: PensamentoService){}

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length > 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito == false){
      return 'inativo'
    }else{
      return 'ativo'
    }
  }

  atualizarFavoritos(){
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento),1)
    })
  }
}
