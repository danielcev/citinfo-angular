import { Component, OnInit } from '@angular/core';
import { Activitie } from '../../../classes/activitie';

@Component({
  selector: 'app-mostpopactivities',
  templateUrl: './mostpopactivities.component.html',
  styleUrls: ['./mostpopactivities.component.css']
})
export class MostpopactivitiesComponent implements OnInit {

  numberActivities = 8;

  activities: Activitie[] = [
    new Activitie("Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00amdsasa dasd asdafsfaf fdafa fa fas afaf af", "https://picsum.photos/1500/1000", "Gratis", "Madrid", "https://daniplata.com/"),
  ];

  constructor() { }

  ngOnInit() {
    for(let i = 1; i <= this.numberActivities; i++){

      let size = this.generateSizePhoto();

      this.activities.push(new Activitie("Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00am", `https://picsum.photos/${size.height}/${size.width}`, "Gratis", "Madrid", "https://daniplata.com/"),);
    }
  }

  openUrl(url:string){
    window.open(url);
  }

  generateSizePhoto(){
    let limitWidthDown = 800;
    let limitWidthUp = 2000;

    let number = this.getRandomArbitrary(limitWidthUp, limitWidthDown);

    let size = {
      width: number,
      height: number*1.5
    }

    return size;

  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  

}
