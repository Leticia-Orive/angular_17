import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  /**Estos dos modulos se pueden dejar o quitar ya que estan vacios: 
  providers: [],
  exports:[],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
