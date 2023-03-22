import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetectionProblemsComponent } from './components/change-detection-problems/change-detection-problems.component';
import { SignalComponent } from './components/signal/signal.component';
import { ZonejsExampleComponent } from './components/zonejs-example/zonejs-example.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignalComponent,
    ChangeDetectionProblemsComponent,
    ZonejsExampleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
