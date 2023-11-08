import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InicioComponent } from './inicio/inicio.component';
import { InvestigadoresComponent } from './investigadores/investigadores.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SemillerosComponent } from './semilleros/semilleros.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'investigadores', component: InvestigadoresComponent },
      { path: 'semilleros', component: SemillerosComponent },
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'publicaciones', component: PublicacionesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
