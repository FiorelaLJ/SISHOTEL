import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-reservas',
  templateUrl: './pagina-reservas.component.html',
  styleUrls: ['./pagina-reservas.component.scss']
})
export class PaginaReservasComponent implements OnInit {

  constructor() {  
    }

  activalor():void{
    var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  }
  activalor1():void{
    var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  }
  activalor2():void{
    var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  }
  activalor3():void{
    var x = document.getElementById("myDIV3");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  }
  model: any={};

  
  ngOnInit() {
  }
  

  
  //this.showSlides(this.slideIndex);
  
  
  
    
 

}
