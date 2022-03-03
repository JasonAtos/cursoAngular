import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    KitchenComponent,
    WaiterComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
