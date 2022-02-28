import { KitchenComponent } from './components/kitchen/kitchen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaiterComponent } from './components/waiter/waiter.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { KitchendGuard } from 'src/app/guards/kitchen.guard';
import { WaiterGuard } from 'src/app/guards/waiter.guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [

  {
    path: 'kitchen',
    component: KitchenComponent,
    canActivate: [KitchendGuard],
  },
  {
    path: 'waiter',
    component: WaiterComponent,
    canActivate: [WaiterGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
