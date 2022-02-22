import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/home.component';
import { PagesComponent } from './pages.component';
import { WaiterComponent } from './waiter/waiter.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    WaiterComponent,
    KitchenComponent,
    LoginComponent,
  ],
  imports: [
    ComponentsModule,
    RouterModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    WaiterComponent,
    KitchenComponent,
    LoginComponent,
  ],
})
export class PagesModule { }
