import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { APP_STATE_REDUCERS } from './state/state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule, PERSISTENCE } from '@angular/fire/compat/auth';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { WaiterComponent } from './pages/waiter/waiter.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KitchenComponent,
    WaiterComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    StoreModule.forRoot(APP_STATE_REDUCERS),
    StoreDevtoolsModule.instrument({ name: "debug area" }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: PERSISTENCE, useValue: 'local' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
