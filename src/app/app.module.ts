import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { Section2exo2Component } from './section2exo2/section2exo2.component';
import {FormsModule} from "@angular/forms";
import { Section2exo3Component } from './section2exo3/section2exo3.component';
import { GameControlComponent } from './section5exo4/game-control/game-control.component';
import { OddComponent } from './section5exo4/odd/odd.component';
import { EvenComponent } from './section5exo4/even/even.component';
import {Section5exo4Component} from "./section5exo4/section5exo4.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Section2exo2Component,
    Section2exo3Component,
    Section5exo4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
