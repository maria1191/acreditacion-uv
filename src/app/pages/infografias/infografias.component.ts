import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'infografias',
  templateUrl: './infografias.component.html',
  styleUrls: ['./infografias.component.css']
})
export class InfografiasComponent implements OnInit {

  infografias = [
    "assets/infografias/infografia_octubre_1.jpeg",
    "assets/infografias/infografia_octubre_2.jpeg",
    "assets/infografias/infografia_octubre_3.jpeg",
    "assets/infografias/infografia_octubre_4.jpeg",
    "assets/infografias/infografia_octubre_5.jpeg",

    "assets/infografias/INFOGRAFIA agosto ok-01.png",
    "assets/infografias/INFOGRAFIA agosto ok-02.png",

    "assets/infografias/INFOGRAFIA JUNIO V3_page-0001.jpg",
    "assets/infografias/INFOGRAFIA JUNIO V3_page-0002.jpg",
    "assets/infografias/INFOGRAFIA JUNIO V3_page-0003.jpg",
    "assets/infografias/INFOGRAFIA JUNIO V3_page-0004.jpg",

    "assets/infografias/INFOGRAFIA_MAYO_AUTOEVALUACION-ed14294c.png",
    "assets/infografias/INFOGRAFIA_MAYO_ACREDITACION-e2c2381d.png",
];
selectedInfografia: any;

  constructor() { }

  ngOnInit() {
  }

  selectInfografia(i) {
    this.selectedInfografia = i;
  }

  selectSigInfografia(){
    if(!this.selectedInfografia){return;}
    let index = this.infografias.indexOf(this.selectedInfografia);
    if(index < this.infografias.length - 1){
      this.selectInfografia(this.infografias[index+1]);
    }
  }
  selectAntInfografia(){
    if(!this.selectedInfografia){return;}
    let index = this.infografias.indexOf(this.selectedInfografia);
    if(index > 0){
      this.selectInfografia(this.infografias[index-1]);
    }
  }

  unselectInfografia() {
    this.selectedInfografia = null;
  }

}
