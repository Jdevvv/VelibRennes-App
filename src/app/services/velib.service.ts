import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Velib } from '../interface/velib'
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VelibService {

  constructor(private http: HttpClient) { }

  getVelib(): Observable<Velib[]> {
    return this.http.get(environment.apiUrl).pipe(
      map((res: Velib[]) => {
        return res;
      })
    )
  }
}
