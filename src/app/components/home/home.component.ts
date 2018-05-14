import { Component, OnInit } from '@angular/core';
import { Citie } from '../../classes/citie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities: Citie[] = [
    new Citie("Madrid","Capital de España"),
    new Citie("Barcelona","Ciudad de España"),
    new Citie("Londres","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum, dui quis mollis posuere, sem urna elementum massa, a congue felis dolor sit amet enim"),
    new Citie("Roma","Nulla nec eleifend nisi. Cras aliquam massa dui, ut malesuada ex faucibus a. Morbi at tortor sed nibh sodales luctus sit amet ac nunc. Donec non ultrices massa. Donec faucibus leo ipsum, non iaculis nisi pretium sit amet. Aenean commodo, libero sed malesuada tristique, arcu")
  ];

  constructor() { }

  ngOnInit() {
  }

}
