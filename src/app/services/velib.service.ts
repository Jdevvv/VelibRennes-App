import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Velib } from '../interface/velib'
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VelibService {

  constructor(private http: HttpClient) { }

  //Get Velib api data  
  getVelib(): Observable<Velib[]> {
    return this.http.get(environment.apiUrl).pipe(
      //Catch http errors
      catchError( err => {
        if (err.status) {
          return throwError(err.status + " : " + err.message);
        }
      }),
      //if no errors, return array of Velib
      map((res: Velib[]) => {
        return res;
      })
    )
  }

}
