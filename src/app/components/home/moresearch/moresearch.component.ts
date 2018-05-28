import { Component, OnInit } from '@angular/core';
import { Citie } from '../../../classes/citie';

@Component({
  selector: 'app-moresearch',
  templateUrl: './moresearch.component.html',
  styleUrls: ['./moresearch.component.css']
})
export class moresearchComponent implements OnInit {

  cities: Citie[] = [
    new Citie(1,"Madrid","Capital de España", "https://picsum.photos/1920/1080"),
    new Citie(2,"Roma","Nulla nec eleifend nisi. Cras aliquam massa dui, ut malesuada ex faucibus a. Morbi at tortor sed nibh sodales luctus sit amet ac nunc. Donec non ultrices massa. Donec faucibus leo ipsum, non iaculis nisi pretium sit amet. Aenean commodo, libero sed malesuada tristique, arcu", "https://picsum.photos/1920/1080"),
    new Citie(3,"Londres","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum, dui quis mollis posuere, sem urna elementum massa, a congue felis dolor sit amet enim", "https://picsum.photos/1920/1080")
  ];

  constructor() { }

  ngOnInit() {
  }

}
