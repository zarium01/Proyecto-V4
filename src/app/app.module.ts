import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { asistenciaTelefonicaComponent } from 'src/pages/asistenciaTelefonica/asistenciaTelefonica.component';
import { helpComponent } from 'src/pages/help/help.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { nivelesEmergenciaComponent } from 'src/pages/nivelesEmergencia/nivelesEmergencia.component';
import { NoteComponent } from 'src/pages/note/note.component';
import { reclamosSugerenciasComponent } from 'src/pages/reclamosSugerencias/reclamosSugerencias.component';
import { RegisterComponent } from 'src/pages/registro/registro.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    NoteComponent,
    helpComponent,
    nivelesEmergenciaComponent,
    reclamosSugerenciasComponent,
    asistenciaTelefonicaComponent

  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
