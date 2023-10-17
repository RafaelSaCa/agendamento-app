import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    PacientesComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule

  ]
})
export class PacientesModule { }
