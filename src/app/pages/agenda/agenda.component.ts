import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {



  meses = [{
      nombre: 'Marzo 2021',
      actividades: ['Elaboración metodología de trabajo']
    },{
      nombre: 'Abril 2021',
      actividades: ['Aprobación metodología de trabajo en Consejo académico y Junta directiva',
      'Realización de hito de lanzamiento',
      'Realización proceso de inducción a las comisiones por área',
      'Modificación comité de calidad mediante dictación decreto',
      'Constitución comité técnico',
      'Entrega primer reporte de fase desde comisiones a Comité técnico']
    },{
      nombre: 'Mayo 2021',
      actividades: [
        'Inicio sesiones de trabajo comisiones',
        'Entrega primer reporte de fase desde comité técnico a comité de calidad',
        'Entrega segundo informe de fase desde comisiones a comité técnico',
        'Entrega segundo informe de fase desde comité técnico a comité de calidad',
        'Entrega unificada de datos desde Dirección de análisis institucional a comisiones'
      ]
    },{
      nombre: 'Junio 2021',
      actividades: [
        'Difusión de avances del proceso en consejo académico y consejos de facultad',
        'Entrega tercer reporte desde comisiones a comité técnico'
      ]
    },{
      nombre: 'Julio 2021',
      actividades: [
        'Entrega tercer reporte desde comité técnico a comité de calidad',
        'Entrega informe descriptivo de encuestas desde Dirección de análisis institucional a comisiones',
        'Entrega informes de entrevistas desde Dirección de análisis institucional a comisiones',
        'Entrega cuarto reporte desde comisiones a comité técnico',
        'Entrega cuarto reporte desde comité técnico a comité de calidad'
      ]
    },{
      nombre: 'Agosto 2021',
      actividades: [
        'Entrega quinto reporte desde comisiones a comité técnico',
        'Entrega quinto reporte desde comité técnico a comité de calidad'
      ]
    },{
      nombre: 'Septiembre 2021',
      actividades: [
        'Difusión estado de avance en consejo académico y consejos de facultad',
        'Entrega sexto informe desde comisiones a comité técnico',
        'Entrega sexto informe desde comité técnico a comité de calidad'
      ]
    },{
      nombre: 'Octubre 2021',
      actividades: ['Entrega séptimo reporte de fase desde comité técnico a comité de calidad']
    },{
      nombre: 'Noviembre 2021',
      actividades: [
        'Entrega octavo reporte de fase desde comité técnico a comité de calidad',
        'Redacción informe de autoevaluación por parte del comité técnico'
      ]
    },{
      nombre: 'Diciembre 2021',
      actividades: [
        'Finalización pre informe autoevaluación por parte del comité técnico',
        'Entrega de pre informe de autoevaluación por parte del comité técnico al comité de calidad',
        'Difusión estado de avance del proceso en consejo académico y consejos de facultad'
      ]
    },{
      nombre: 'Enero 2022',
      actividades: ['Revisión por parte del Comité de calidad del informe de autoevaluación institucional']
    },{
      nombre: 'Marzo 2022',
      actividades: ['Ingreso del informe de autoevaluación y anexos a CNA']
  }];

  constructor() { }

  ngOnInit() {
  }

}
