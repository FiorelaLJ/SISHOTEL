import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent implements OnInit {
  imgUrl = "";
  constructor() { }

  ngOnInit() {
    this.imgUrl = 'logoHotel.jpg';
  }

}
