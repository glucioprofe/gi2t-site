import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { InicioComponent } from './inicio/inicio.component';
import { InvestigadoresComponent } from './investigadores/investigadores.component';
import { SemillerosComponent } from './semilleros/semilleros.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { EventosComponent } from './eventos/eventos.component';


@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    InvestigadoresComponent,
    SemillerosComponent,
    ProyectosComponent,
    PublicacionesComponent,
    EventosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
