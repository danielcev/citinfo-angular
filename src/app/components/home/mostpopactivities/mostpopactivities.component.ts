import { Component, OnInit } from '@angular/core';
import { Activitie } from '../../../classes/activitie';

@Component({
  selector: 'app-mostpopactivities',
  templateUrl: './mostpopactivities.component.html',
  styleUrls: ['./mostpopactivities.component.css']
})
export class MostpopactivitiesComponent implements OnInit {

  activities: Activitie[] = [
    new Activitie("Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00am", "https://picsum.photos/1920/1080", "Gratis", "Madrid", "https://daniplata.com/"),
    new Activitie("Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00am", "https://picsum.photos/1920/1080", "Gratis", "Madrid", "https://daniplata.com/"),
    new Activitie("Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00am", "https://picsum.photos/1920/1080", "Gratis", "Madrid", "https://daniplata.com/"),
    new Activitie("Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00am", "https://picsum.photos/1920/1080", "Gratis", "Madrid", "https://daniplata.com/"),
    new Activitie("Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00am", "https://picsum.photos/1920/1080", "Gratis", "Madrid", "https://daniplata.com/"),
    new Activitie("Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00am", "https://picsum.photos/1920/1080", "Gratis", "Madrid", "https://daniplata.com/"),
    new Activitie("Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00am", "https://picsum.photos/1920/1080", "Gratis", "Madrid", "https://daniplata.com/"),
    new Activitie("Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00am", "https://picsum.photos/1920/1080", "Gratis", "Madrid", "https://daniplata.com/")
  ];

  constructor() { }

  ngOnInit() {
  }

  openUrl(url:string){
    window.open(url);
  }

}
