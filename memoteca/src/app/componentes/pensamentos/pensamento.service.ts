import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Pensamento } from './pensamentos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) {

  }

<<<<<<< HEAD
  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamento[]>{
=======
  listar(pagina: number, filtro: string): Observable<Pensamento[]>{
>>>>>>> bb071b825e9b927a095d39b9dc65510cbdcb0b19
    const itensPorPagina = 6

    let params = new HttpParams()
      .set("_page",pagina)
      .set("_limit",itensPorPagina)

<<<<<<< HEAD
    if(filtro.trim().length > 2){
      params = params.set("q",filtro)
    }

    if(favoritos){
      params = params.set("favorito",true)
    }
=======
      if(filtro.trim().length > 2){
        params = params.set("q",filtro)
      }
>>>>>>> bb071b825e9b927a095d39b9dc65510cbdcb0b19

    return this.http.get<Pensamento[]>(this.API,{params});

  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API,pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url,pensamento)
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento>{
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }

  excluir(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }




}
