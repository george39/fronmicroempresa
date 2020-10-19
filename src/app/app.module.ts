import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { EgresosComponent } from './components/egresos/egresos.component';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ListEgresosComponent } from './components/egresos/list-egresos.component';
import { EditEgresoComponent } from './components/egresos/edit-egreso.component';
import { EgresosPipe } from './pipes/egresos.pipe';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { ListIngresosComponent } from './components/ingresos/list-ingresos.component';
import { CalculosComponent } from './components/calculos/calculos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EgresosComponent,
    ListEgresosComponent,
    EditEgresoComponent,
    EgresosPipe,
    IngresosComponent,
    ListIngresosComponent,
    CalculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
