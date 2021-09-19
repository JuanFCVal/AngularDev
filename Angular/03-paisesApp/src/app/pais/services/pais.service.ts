import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private _apiUrl: string = "https://restcountries.eu/rest/v2"
  constructor(private http: HttpClient) { }
  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this._apiUrl}/name/${termino}`
    console.log(url)
    return this.http.get<Country[]>(url); //Se agrega el tipado de la respuesta
  }
}
