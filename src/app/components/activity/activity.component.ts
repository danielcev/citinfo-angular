import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcType, Activity } from '../../classes/activity';
import { Direction } from '../../classes/direction';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  id:number;
  activity: Activity;

  constructor(private route:ActivatedRoute) {
    this.activity = new Activity(1, "Excursión a la sierra", "Excursión a Cercedilla. Salida desde Madrid, Plaza de Castilla. Cada domingo a las 9.00amdsasa dasd asdafsfaf fdafa fa fas afaf af", "https://picsum.photos/1500/500", "Gratis", "Madrid", "https://daniplata.com/", new Direction(3.5, 6.7), AcType.museum);
   }

  ngOnInit() {

    this.route.params.subscribe(params => this.id = params['id']);

  }

}
