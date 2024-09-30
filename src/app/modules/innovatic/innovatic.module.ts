import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnovaticRoutingModule } from './innovatic-routing.module';
import { InnovaticComponent } from './innovatic.component';
import { InnovaticInicioComponent } from './innovatic-inicio/innovatic-inicio.component';
import { InnovaticMiembrosComponent } from './innovatic-miembros/innovatic-miembros.component';
import { InnovaticIniciativasComponent } from './innovatic-iniciativas/innovatic-iniciativas.component';
import { InnovaticEventosComponent } from './innovatic-eventos/innovatic-eventos.component';


@NgModule({
  declarations: [
    InnovaticComponent,
    InnovaticInicioComponent,
    InnovaticMiembrosComponent,
    InnovaticIniciativasComponent,
    InnovaticEventosComponent
  ],
  imports: [
    CommonModule,
    InnovaticRoutingModule
  ]
})
export class InnovaticModule { }
