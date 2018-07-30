import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInicioComponent} from './componentes/pagina-inicio/pagina-inicio.component';
import { PaginaLoginComponent} from './componentes/pagina-login/pagina-login.component';
import { PaginaReservasComponent} from './componentes/pagina-reservas/pagina-reservas.component';
import { PaginaNosotrosComponent} from './componentes/pagina-nosotros/pagina-nosotros.component';
import { PaginaOfertasComponent} from './componentes/pagina-ofertas/pagina-ofertas.component';
import { PaginaRoomsComponent} from './componentes/pagina-rooms/pagina-rooms.component';
import { PaginaServiciosComponent} from './componentes/pagina-servicios/pagina-servicios.component';
import { PaginaRecuperarComponent} from './componentes/pagina-recuperar/pagina-recuperar.component';
import { PaginaRegistroComponent} from './componentes/pagina-registro/pagina-registro.component';
import { Error404Component} from './componentes/error404/error404.component';
import { PaginaReservasComponentDos} from './componentes/pagina-reservasDos/pagina-reservasDos.component';
import { PaginaPagarComponent } from './componentes/form-pagar/form-pagar.component';
import {resumenReserva} from './componentes/resumen-Reserva/resumen-Reserva.component';

const routes: Routes = [
  {path: '', component: PaginaInicioComponent},
  {path: 'login', component: PaginaLoginComponent},
  {path: 'reservas', component: PaginaReservasComponent},
  {path: 'nosotros', component: PaginaNosotrosComponent},
  {path: 'ofertas', component: PaginaOfertasComponent},
  {path: 'rooms', component: PaginaRoomsComponent},
  {path: 'servicios', component: PaginaServiciosComponent},
  {path: 'recuperar', component: PaginaRecuperarComponent},
  {path: 'registro', component: PaginaRegistroComponent},
  {path: 'reservasDos', component: PaginaReservasComponentDos},
  {path: 'pagar',component:PaginaPagarComponent},
  {path: '**', component: Error404Component},
  {path: 'resumen_reserva', component: resumenReserva}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
