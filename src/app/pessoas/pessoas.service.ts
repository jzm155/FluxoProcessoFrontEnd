import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../models/Pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://localhost:7218/api/Pessoa";

  GetAll(page: number, limit: number): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.baseUrl}`, { params: new HttpParams().set('page', page).set('limit',limit) });
  }
}
