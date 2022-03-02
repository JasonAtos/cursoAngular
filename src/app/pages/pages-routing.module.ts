import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/home.component';
import { WaiterComponent } from './waiter/waiter.component';
import { KitchenComponent } from './kitchen/kitchen.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, /*canActivate: [AuthGuard] */ },
      { path: 'waiter', component: WaiterComponent },
      { path: 'kitchen', component: KitchenComponent },
      { path: '**', redirectTo: 'dashboard' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
