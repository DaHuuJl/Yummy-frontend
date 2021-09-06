import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-title-menu',
  templateUrl: './card-title-menu.component.html',
  styleUrls: ['./card-title-menu.component.css']
})
export class CardTitleMenuComponent implements OnInit {

  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
