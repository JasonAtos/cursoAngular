import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from './pages/pages-routing.module';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
