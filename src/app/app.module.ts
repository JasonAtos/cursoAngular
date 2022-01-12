import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { MapaEditComponent } from './components/mapa/mapa-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  // entryComponents : [
  // ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF9Bw97M_oz1obYLPH8JGzgYIxLnqTg1A'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
