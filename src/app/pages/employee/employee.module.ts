import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ActionsComponent } from './components/actions/actions.component';
import { TableComponent } from './components/table/table.component';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
  declarations: [EmployeeComponent, ActionsComponent, TableComponent, ResumeComponent],
  imports: [CommonModule, EmployeeRoutingModule, MaterialModule],
})
export class EmployeeModule {}
