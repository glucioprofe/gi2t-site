import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=>import('./modules/home/home.module').then(m=>m.HomeModule) },
  { path: 'innovatic', loadChildren: ()=>import('./modules/innovatic/innovatic.module').then(m=>m.InnovaticModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
