import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { APP_STATE_REDUCERS } from './state/state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(APP_STATE_REDUCERS),
    StoreDevtoolsModule.instrument({ name:"debug area" }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
