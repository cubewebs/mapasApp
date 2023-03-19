import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mr') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-16.7116703, 28.088188];

  constructor() {}

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {})
    this.mapa.off('zoomend', () => {})
    this.mapa.off('move', () => {})
  }

  ngAfterViewInit(): void {
    
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel // starting zoom
    });

    this.mapa.on('zoom', (ev) => {
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', (ev) => {
      if(this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18)
      }
    });

    this.mapa.on('move', (ev) => {
      const lng = this.mapa.getCenter().lng;
      const lat = this.mapa.getCenter().lat;
      this.center = [lng, lat];
    })

    
    
  }

  zoomIn() {
    this.mapa.zoomIn();
  }

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomCambio(zoomInput: string) {
    this.mapa.zoomTo(Number(zoomInput))
  }

}
