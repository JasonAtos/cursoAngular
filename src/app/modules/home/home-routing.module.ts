import { KitchenComponent } from './components/kitchen/kitchen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaiterComponent } from './components/waiter/waiter.component';

const routes: Routes = [

  {
    path: 'kitchen',
    component: KitchenComponent
  },
  {
    path: 'waiter',
    component: WaiterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
