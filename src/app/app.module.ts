import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaLoginComponent } from './componentes/pagina-login/pagina-login.component';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { Error404Component } from './componentes/error404/error404.component';
import { ContenidoInicioComponent } from './componentes/contenido-inicio/contenido-inicio.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuIzquierdaComponent } from './componentes/menu-izquierda/menu-izquierda.component';
import { ContenidoPrincipalComponent } from './componentes/contenido-principal/contenido-principal.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { PagiaOfertasComponent } from './componetes/pagia-ofertas/pagia-ofertas.component';
import { PaginaOfertasComponent } from './componentes/pagina-ofertas/pagina-ofertas.component';
import { PaginaRoomsComponent } from './componentes/pagina-rooms/pagina-rooms.component';
import { PaginaServiciosComponent } from './componentes/pagina-servicios/pagina-servicios.component';
import { PaginaNosotrosComponent } from './componentes/pagina-nosotros/pagina-nosotros.component';
import { PaginaReservasComponent } from './componentes/pagina-reservas/pagina-reservas.component';
import { PaginaRegistroComponent } from './componentes/pagina-registro/pagina-registro.component';
import { PaginaRecuperarComponent } from './componentes/pagina-recuperar/pagina-recuperar.component';
import { FormDerechoComponent } from './componentes/form-derecho/form-derecho.component';
import { PaginaReservasComponentDos } from './componentes/pagina-reservasDos/pagina-reservasDos.component';
import { PaginaPagarComponent } from './componentes/form-pagar/form-pagar.component';
import {resumenReserva} from './componentes/resumen-Reserva/resumen-Reserva.component';
@NgModule({
  declarations: [
    AppComponent,
    PaginaLoginComponent,
    PaginaInicioComponent,
    NavegadorComponent,
    Error404Component,
    ContenidoInicioComponent,
    CabeceraComponent,
    MenuIzquierdaComponent,
    ContenidoPrincipalComponent,
    PiePaginaComponent,
    PagiaOfertasComponent,
    PaginaOfertasComponent,
    PaginaRoomsComponent,
    PaginaServiciosComponent,
    PaginaNosotrosComponent,
    PaginaReservasComponent,
    PaginaRegistroComponent,
    PaginaRecuperarComponent,
    PaginaReservasComponentDos,
    PaginaPagarComponent,
    resumenReserva,
    FormDerechoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
