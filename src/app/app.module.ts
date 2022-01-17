import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedias/espias/medicos.component';
import { MedicoComponent } from './intermedio-2/medico/medico.component';
import { MedicoService } from './intermedio-2/medico.service';
import { HospitalComponent } from './intermedio-2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio-2/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { rutas } from './avanzado/rutas/app.routes';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzado/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [
    MedicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
