import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primercomponent';
import { HooksAngular } from '../components/hooksangular/hooksangular';
import { DeportesComponent } from '../components/deportescomponent/deportescomponent';
import { DeportesComponentV2 } from '../components/deportescomponentv2/deportescomponentv2';
import { FormsModule } from '@angular/forms';
import { FormsBinding } from '../components/formsbinding/formsbinding';


@NgModule({
  declarations: [//AQUI AÑADIMOS LOS COMPONENTS
    App,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    DeportesComponentV2,
    FormsBinding
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//LO IMPLEMENTAMOS PARA PODER USAR FORMULARIOS
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
