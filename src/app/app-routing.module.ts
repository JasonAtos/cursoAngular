import { HomeModule } from './modules/home/home.module';
import { UsersComponent } from './modules/home/components/users/users.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from './guards/user-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    loadChildren: ()=>import(`./modules/home/home.module`).then(m => m.HomeModule),
    canActivate: [UserGuardGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: ()=>import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
