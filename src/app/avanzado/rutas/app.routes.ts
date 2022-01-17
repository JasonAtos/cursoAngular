import { Routes } from "@angular/router";
import { MedicoComponent } from "src/app/intermedio-2/medico/medico.component";
import { HospitalComponent } from '../../intermedio-2/hospital/hospital.component';
import { IncrementadorComponent } from '../../intermedio-2/incrementador/incrementador.component';

export const rutas: Routes = [
    {path: 'hospital', component: HospitalComponent},
    {path: 'medico/:id', component: MedicoComponent},
    {path: '**', component: IncrementadorComponent},
]