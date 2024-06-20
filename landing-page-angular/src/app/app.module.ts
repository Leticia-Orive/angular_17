import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DniComponent } from './contact/dni/dni.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductDetailComponent,
    ProductsComponent,
    DniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, //Formulario de tipo plantilla
    ReactiveFormsModule //Formularios de tipo reactivo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
