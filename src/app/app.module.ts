import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrarayudaComponent } from './registrarayuda/registrarayuda.component';
import { RegistarestudiantesComponent } from './registarestudiantes/registarestudiantes.component';
import { TablaComponent } from './tabla/tabla.component';
import { AyudaService } from './service/ayuda.service';
import { TablaPersonaComponent } from './tabla-persona/tabla-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrarayudaComponent,
    RegistarestudiantesComponent,
    TablaComponent,
    TablaPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AyudaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
