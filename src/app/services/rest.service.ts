import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestService {
   endpoint = 'http://localhost:8080/Demo';
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor( private http: HttpClient) { }
  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
   getRecargas(): Observable<any> {
    return  this.http.get(this.endpoint + '/getRecargas', this.httpOptions).pipe(map(this.extractData));
}

  recargar(data) {
    return this.http.post(this.endpoint + '/recarga', JSON.stringify(data), this.httpOptions).pipe(map(this.extractData));
  }

  getRecargasbyAmount(monto: number) {
    return this.http.get(this.endpoint + `/getRecargasbyAmount?monto=${monto}`, this.httpOptions).pipe(map(this.extractData));
  }
}

