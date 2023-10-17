import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {

  pacientes : Paciente[] = [];
  displayedColumns = ['id', 'nome','cpf','rg','telefone', 'endereco'];

}
