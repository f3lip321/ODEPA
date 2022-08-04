import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  url='http://localhost:8080/region/listar';
  constructor(private http: HttpClient) { }

  getRegiones():Observable<any>
  {
    return this.http.get(this.url);
  }
  
}
