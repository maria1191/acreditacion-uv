import { Component, Input } from '@angular/core';

@Component({
  selector: 'indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent {

  _indicadores: any[];
  @Input() set indicadores(indicadores: any[]) {
    this._indicadores = indicadores;
    this.countIndicadores();
  };

  constructor() {
  }

  countIndicadores() {
    for (let i = 0; i < this._indicadores.length; i++) {
      this._indicadores[i].display = 0;      
    }
    let interval = setInterval(() => {
      for (let i = 0; i < this._indicadores.length; i++) {
        if(this._indicadores[i].display < this._indicadores[i].valor) {
          this._indicadores[i].display += (this._indicadores[i].valor / (8*(i+1)));
        } else {
          this._indicadores[i].display = this._indicadores[i].valor;
        }
      }
    }, 100);
  }

}
