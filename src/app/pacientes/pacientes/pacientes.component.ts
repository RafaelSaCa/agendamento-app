import { Observable, catchError, of } from 'rxjs';
import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacientesService } from '../services/pacientes.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {

  pacientes$ : Observable<Paciente[]>;
  displayedColumns = ['id', 'nome','cpf','rg','telefone', 'endereco'];

  constructor(private pacienteService: PacientesService,
              public dialog: MatDialog
  ){

    this.pacientes$ = this.pacienteService.getAll()
      .pipe(
        catchError(error => {
          this.onError("Ocorrreu algum erro ao buscar os dados!");
          return of ([])
        })
      );
  }


  onError(errorMsg: string ) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
