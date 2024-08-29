import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resultado } from '../types/type';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class PassagensService {
  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ){}
  
  getPassagens(search: any): Observable<Resultado>{
    const params = search
    return this.http.get<Resultado>(`${this.apiUrl}/passagem/search`, {params});
  }

}
