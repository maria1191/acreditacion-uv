import { Component, OnInit } from '@angular/core';
//import { SafePipe } from 'src/app/services/database.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        backgroundColor: '#ffffff',
        color: '#999999',
        border: '1px solid #999999'
      })),
      state('closed', style({
        backgroundColor: '#607d8b'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('slideInLeft', [
      state('hidden', style({
        right: '-200px'
      })),
      state('showing', style({
        right: '10px'
      })),
      transition('hidden => showing', [
        animate('0.3s')
      ]),
      transition('showing => hidden', [
        animate('0.3s')
      ]),
    ])
  ]
})

export class AppComponent implements OnInit {
  sections: any[];
  selectedIndex: number;
  selectedSection: any;
  hideDescription: boolean = true;
  selectedNoticia: any;
  showBoletines: boolean;
  boletines = [
    {
      edicion: 3,
      nombre: 'AGOSTO 2021',
      documento: 'https://drive.google.com/file/d/1bsDNItRgVGfvXNyz8oQHagftk9Uqgdqq/preview'
    },
    {
      edicion: 2,
      nombre: 'JULIO 2021',
      documento: 'https://drive.google.com/file/d/1sNSvq-OTBhR9VO81QOpudJYwGcTXGNSO/preview'
    }, {
      edicion: 1,
      nombre: 'JUNIO 2021',
      documento: 'https://drive.google.com/file/d/1bYft2Te4yfKkVHUU8H2_LLcbY2IoYNwX/preview'
    }];
  selectedBoletin: any;
  hideBoletinToast: boolean = true;

  constructor() {
    this.initSections();

    this.showModal(false);
  }

  ngOnInit() {
    setTimeout(() => { this.hideBoletinToast = false; }, 500);
  }

  initSections() {
    this.sections = [
      {
        nombre: 'Inicio',
        icon: 'home'
      },
      {
        nombre: 'Áreas',// de Acreditación',
        icon: 'areas'
      },
      {
        nombre: 'Comités y Comisiones',
        icon: 'comites'
      },
      {
        nombre: 'Etapas',
        icon: 'etapas'
      },
      {
        nombre: 'Agenda',
        icon: 'agenda'
      },
      {
        nombre: 'Documentos',
        icon: 'documentos'
      },
      {
        nombre: 'Ficha Institucional',// de Datos',
        icon: 'ficha'
      },
      {
        nombre: 'Preguntas Frecuentes',
        icon: ''
      },
      {
        nombre: 'Noticias',
        icon: 'noticias'
      }
    ];
    let index = localStorage.getItem('selectedSection');
    let event = { item: this.sections[index || 0], index: index || 0 };
    this.selectSection(event);
  }

  selectSection(event: any) {
    this.selectedSection = event.item;
    this.selectedIndex = event.index || 0;
    this.quitarNoticia();
    this.showBoletines = false;
  }

  verNoticia(n: any) {
    this.selectedNoticia = n;
  }
  quitarNoticia() {
    this.selectedNoticia = null;
  }

  toggleBoletines() {
    if (!this.showBoletines) {
      this.selectBoletin(this.boletines[0]);
    }
    this.showBoletines = !this.showBoletines;
  }

  selectBoletin(b) {
    this.selectedBoletin = b;
  }






  displayModal: boolean = false;
  showModal(visible: boolean){
    this.displayModal = visible;
  }


  openURLEncuesta() {
    let url = "https://encuestasdai.uv.cl/21";
    this.openURL(url)
  }

  openURL(url) {
    window.open(url, "_blank");
  }

}

