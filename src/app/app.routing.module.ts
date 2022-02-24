import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KitchenGuard } from "./guardians/kitchen.guard";
import { WaiterGuard } from "./guardians/waiter.guard";
import { KitchenComponent } from "./pages/kitchen/kitchen.component";
import { LoginComponent } from "./pages/login/login.component";
import { WaiterComponent } from "./pages/waiter/waiter.component";

const Routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  { path: 'sign-in', component: LoginComponent },
  {
    path: 'kitchen',
    component: KitchenComponent,
    canActivate: [KitchenGuard],
    canActivateChild: [KitchenGuard],
  },
  {
    path: 'waiter',
    component: WaiterComponent,
    canActivate: [WaiterGuard],
    canActivateChild: [WaiterGuard],
  },
]


@NgModule({
  imports: [
    RouterModule.forRoot(Routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }