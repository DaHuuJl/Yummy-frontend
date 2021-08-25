import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    {'image': '../../assets/banner/banner1.png'},
    {'image': '../../assets/banner/banner2.jpeg'},
    {'image': '../../assets/banner/banner1.png'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
