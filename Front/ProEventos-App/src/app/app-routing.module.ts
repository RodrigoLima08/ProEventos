import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContatosComponent } from './components/contatos/contatos.component';


const routes: Routes = [
  {path:'eventos' , component:EventosComponent},
  {path:'dashboard' , component:DashboardComponent},
  {path:'palestrantes' , component:PalestrantesComponent},
  {path:'perfil' , component:PerfilComponent},
  {path:'' , redirectTo:'dashboard',pathMatch:'full'},
  {path:'**' , component:ContatosComponent},
  {path:'contatos' , component:ContatosComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
