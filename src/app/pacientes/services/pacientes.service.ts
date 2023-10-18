import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, tap } from 'rxjs';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private readonly apiUrl = 'api/pacientes';

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(this.apiUrl)
    .pipe(
      first(),
       tap(pacientes => console.log(pacientes))
    );
  }

}
