import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primercomponent';
import { HooksAngular } from '../components/hooksangular/hooksangular';

@NgModule({
  declarations: [//AQUI AÑADIMOS LOS COMPONENTS
    App,
    PrimerComponent,
    HooksAngular
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
