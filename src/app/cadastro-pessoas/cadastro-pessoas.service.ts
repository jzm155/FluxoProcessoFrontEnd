import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Combo } from '../models/Combo';
import { Pessoa } from '../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class CadastroPessoasService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://localhost:7218/api/Pessoa";

  GetById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.baseUrl}/GetPessoa`, { params: new HttpParams().set('id', id) });
  }

  GetCargos(): Observable<Combo[]> {
    return this.http.get<Combo[]>(`${this.baseUrl}/GetCargos`, { params: new HttpParams() });
  }

  GetNiveis(): Observable<Combo[]> {
    return this.http.get<Combo[]>(`${this.baseUrl}/GetNiveis`, { params: new HttpParams() });
  }

  SalvarPessoa(pessoa: Pessoa){
    let body = JSON.stringify(pessoa);
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.http.post<Pessoa>(`${this.baseUrl}`, pessoa, { headers }).subscribe(
      result => { console.log(result); },
      error => {  },
      () => { });
  }
}
