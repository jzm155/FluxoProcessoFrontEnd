import { Injectable } from '@angular/core';
import { Combo } from '../../models/Combo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreComboboxService {

  baseUrl = "https://localhost:7218/api";

  constructor(private http: HttpClient) { }

  LoadStore(controllerName: string,baseMethod : string): Observable<Combo[]> {
    return this.http.get<Combo[]>(`${this.baseUrl}/${controllerName}/${baseMethod}`, { params: new HttpParams() });
  }
}
