import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string,
  marker?: mapboxgl.Marker,
  center?: [number, number],
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mr') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-16.7248, 28.0957];

  // Arreglo de marcadores
  marcadores: MarcadorColor[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel // starting zoom
    });

    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'Hola Mundo';

    // const marker = new mapboxgl.Marker()
    //   .setLngLat( this.center )
    //   .addTo( this.mapa )



  }

  agregarMarcador() {

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat( this.center )
      .addTo( this.mapa );

    this.marcadores.push({
      color,
      marker: nuevoMarcador
    });

    this.guardarMarcadoresLocalStorage();

  }

  irMarcador(marcador: MarcadorColor) {

    this.mapa.flyTo({
      center: marcador.marker!.getLngLat()
    })

  }

  guardarMarcadoresLocalStorage() {

    const lngLatArr: MarcadorColor[] = [];
    this.marcadores.forEach( m => {
      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLatArr.push({
        color,
        center: [ lng, lat ] 
      })

      localStorage.setItem('marcadores', JSON.stringify(lngLatArr))
    })
  }

  leerLocalStorage() {

  }


}
