import { Component, OnInit } from '@angular/core';
import { AcType, Activity } from '../../../classes/activity';
import { Direction } from '../../../classes/direction';

import { Router, ActivatedRoute }  from "@angular/router";

@Component({
  selector: 'app-mostpopactivities',
  templateUrl: './mostpopactivities.component.html',
  styleUrls: ['./mostpopactivities.component.css']
})
export class MostpopactivitiesComponent implements OnInit {

  numberActivities = 8;

  activities: Activity[] = [
    new Activity(1, "Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00amdsasa dasd asdafsfaf fdafa fa fas afaf af", "https://picsum.photos/1500/500", "Gratis", "Madrid", "https://daniplata.com/", new Direction(3.5, 6.7), AcType.tour),
  ];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    for(let i = 1; i <= this.numberActivities; i++){

      let size = this.generateSizePhoto();

      this.activities.push(new Activity(2, "Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00am", `https://picsum.photos/${size.height}/${size.width}`, "Gratis", "Madrid", "https://daniplata.com/", new Direction(3.5, 6.7), AcType.touristicBus));
    }
  }

  openUrl(url:string){
    window.open(url);
  }

  generateSizePhoto(){
    let limitWidthDown = 500;
    let limitWidthUp = 700;

    let number = this.getRandomArbitrary(limitWidthUp, limitWidthDown);

    let size = {
      width: number,
      height: number*3
    }

    return size;

  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  goToActivity(id:number){
    this.router.navigate(['/activities', id]);
  }
}
