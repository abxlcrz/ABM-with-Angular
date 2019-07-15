import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:mensaje', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
