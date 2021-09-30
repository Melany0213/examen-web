import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RegistarestudiantesComponent } from './registarestudiantes/registarestudiantes.component';
import { RegistrarayudaComponent } from './registrarayuda/registrarayuda.component';
import { TablaPersonaComponent } from './tabla-persona/tabla-persona.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {path: '', redirectTo: 'registrarayudaComponent', pathMatch: 'full'},
  {path: 'menuComponent', component: MenuComponent},
  {path: 'registrarayudaComponent', component: RegistrarayudaComponent},
  {path: 'registarestudiantesComponent', component: RegistarestudiantesComponent},
 {path: 'tablaComponent', component: TablaComponent},
 {path: "tablaPersonaComponent", component: TablaPersonaComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
