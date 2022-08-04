import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './COMPONENETES/agregar/agregar.component';
import { EditarComponent } from './COMPONENETES/editar/editar.component';
import { InicioComponent } from './COMPONENETES/inicio/inicio.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},

  {path:'inicio', component:InicioComponent},
  {path:'editar/:id', component:EditarComponent},
  {path:'agregar', component:AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
