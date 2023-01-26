import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedaadesComponent } from './pages/propiedaades/propiedaades.component';

const routes: Routes = [
	{
		path:'',
		children: [
			{ path: 'fullScreen', component: FullScreenComponent},
			{ path: 'zoom-range', component: ZoomRangeComponent},
			{ path: 'marcadores', component: MarcadoresComponent},
			{ path: 'propiedades', component: PropiedaadesComponent},
			{ path: '**', redirectTo: 'fullScreen'},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
