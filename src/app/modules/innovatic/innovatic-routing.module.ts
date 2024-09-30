import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnovaticComponent } from './innovatic.component';
import { InnovaticInicioComponent } from './innovatic-inicio/innovatic-inicio.component';
import { InnovaticMiembrosComponent } from './innovatic-miembros/innovatic-miembros.component';
import { InnovaticEventosComponent } from './innovatic-eventos/innovatic-eventos.component';
import { InnovaticIniciativasComponent } from './innovatic-iniciativas/innovatic-iniciativas.component';

const routes: Routes = [
  { path: '', component: InnovaticComponent, children: [
      { path: '', component: InnovaticInicioComponent },
      { path: 'miembros', component: InnovaticMiembrosComponent },
      { path: 'iniciativas', component: InnovaticIniciativasComponent },
      { path: 'eventos', component: InnovaticEventosComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnovaticRoutingModule { }
