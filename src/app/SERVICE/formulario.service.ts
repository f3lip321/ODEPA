import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  url='http://localhost:8080/formulario/listar';
  constructor(private http: HttpClient) { }

  getFormularios():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnFormulario(email: string):Observable<any>
  {
    return this.http.get(this.url+'/'+email);
  }

  saveFormulario(formulario: Formulario):Observable<any>
  {
    return this.http.post('http://localhost:8080/formulario/formularios', formulario);
  }

  editFormulario(email:string, formulario: Formulario):Observable<any>
  {
    return this.http.put(this.url+'/'+email, formulario);
  }

  deleteFormulario(email:string):Observable<any>
  {
    return this.http.delete('http://localhost:8080/formulario/formularios/'+email);
  }
}


export interface Formulario{
  email:string;
  comentario:string;
  region:Region;
}

export interface Region{
  id:number;
  name:string;
}