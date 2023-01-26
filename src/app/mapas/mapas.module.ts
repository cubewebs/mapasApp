import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedaadesComponent } from './pages/propiedaades/propiedaades.component';


@NgModule({
  declarations: [
    MiniMapaComponent,
    FullScreenComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    PropiedaadesComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
