import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})

export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = []
  paginaAtual: number = 1
  haMaisPensamentos:boolean = true
  filtro: string = ''
<<<<<<< HEAD
  favoritos: boolean = false
  listaFavoritos: Pensamento[] = []
  titulo: string = 'Meu Mural'

  constructor(
    private service: PensamentoService,
    private router: Router){}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual,this.filtro, this.favoritos).subscribe((listaPensamentos) => {
=======

  constructor(private service: PensamentoService){
  }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual,this.filtro).subscribe((listaPensamentos) => {
>>>>>>> bb071b825e9b927a095d39b9dc65510cbdcb0b19
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos(){
<<<<<<< HEAD
    this.service.listar(++this.paginaAtual,this.filtro,this.favoritos)
=======
    this.service.listar(++this.paginaAtual,this.filtro)
>>>>>>> bb071b825e9b927a095d39b9dc65510cbdcb0b19
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos)
        if(!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true
    this.paginaAtual = 1
<<<<<<< HEAD
    this.service.listar(this.paginaAtual,this.filtro,this.favoritos)
=======
    this.service.listar(this.paginaAtual,this.filtro)
>>>>>>> bb071b825e9b927a095d39b9dc65510cbdcb0b19
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
      })
  }

<<<<<<< HEAD
  recarregarComponente(){
    this.favoritos = false
    this.paginaAtual = 1
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  listarFavoritos(){
    this.titulo = "Meus Favoritos"
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual=1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentosFavoritos => {
        this.listaPensamentos = listaPensamentosFavoritos
        this.listaFavoritos = listaPensamentosFavoritos
      })
  }

=======
>>>>>>> bb071b825e9b927a095d39b9dc65510cbdcb0b19
}
