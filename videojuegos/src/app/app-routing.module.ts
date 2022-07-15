import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { Enlace1Component } from './enlace1/enlace1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalComponent } from './principal/principal.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { InfoGameComponent } from './info-game/info-game.component';

const routes: Routes = [
  {path:"link1", component:Enlace1Component},
  {path:"nav", component:NavbarComponent},
  {path:"search/:id", component:BusquedaComponent},
  {path:"info", component:InfoGameComponent},
  {path:"principal", component:PrincipalComponent},
  {path:"", component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
