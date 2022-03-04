import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  sections = [
    {
      nombre: 'Gestión',
      icon: 'home',
      descripcion: ["Por gestión institucional se entiende el conjunto de políticas y mecanismos destinados a organizar las acciones y recursos materiales, humanos y financieros de la Institución, en función de sus propósitos y fines declarados. Considera la organización y estructura institucional, el sistema de gobierno y la administración de recursos humanos, materiales y financieros."],
      indicadores: [
        {valor: 150207,simbolo: "", background: "#2762b9", icon: "", nombre: "Metros Cuadrados construidos al 2020"},
        {valor: 893.3, simbolo: "", background: "#2762b9", icon: "", nombre: "JCE al año 2020"},
        {valor: 9507,  simbolo: "", background: "#2762b9", icon: "", nombre: "Estudiantes con Gratuidad 2020"},
        {valor: 27,    simbolo: "", background: "#2762b9", icon: "", nombre: "Programas de Postgrado Acreditados"}
      ]
    },
    {
      nombre: 'Pregrado',
      icon: 'home',
      descripcion: ["En el área de la docencia de pregrado, se tomará en consideración el conjunto de políticas y mecanismos institucionales destinados a asegurar la calidad de la formación conducente a título, con especial énfasis en los aspecto relacionados con el diseño y aprobación de los programas ofrecidos; con su implementación y seguimiento; y con un análisis de sus resultados y los mecanismos para revisar y modificar el currículo, la organización de los programas, los métodos pedagógicos, los recursos humanos y materiales asignados a los programas o cualquier otro aspecto que afecte la calidad de la formación entregada."],
      indicadores: [
        {valor: 15624,simbolo: "", background: "#1b9db5", icon: "", nombre: "Matriculados total UV 2021"},
        {valor: 56,simbolo: "", background: "#1b9db5", icon: "", nombre: "Programas Ofertados Vigentes"},
        {valor: 88,simbolo: "%", background: "#1b9db5", icon: "", nombre: "Tasa de Retención 1ª año 2020"},
        {valor: 2905,simbolo: "", background: "#1b9db5", icon: "", nombre: "Matricula 1º año 2021"}
      ]
    },
    {
      nombre: 'Postgrado',
      icon: 'home',
      descripcion: [ 
        "En relación a la docencia de postgrado, las instituciones que opten por esta área deben considerar todas las actividades de postgrado que realizan. En caso de que solo cumplan las condiciones establecidas para programas de doctorado o de maestría, la CNA determinará si la Institución es susceptible de ser evaluada en el área.",
        "Las instituciones que impartan programas de doctorado y opten por acreditarse en el área, deberán otorgar grados académicos de doctor en programas sistemáticos organizados de acuerdo a las normas de la CNA. Estos programas deben estar vigentes, tener al menos una generación de graduados, y referirse a las principales líneas de desarrollo disciplinario de la Institución.",
        "Las instituciones que impartan programas de maestría y opten por acreditarse en el área, deberán otorgar grados académicos de magíster en programas sistemáticos organizados de acuerdo a las normas de la CNA. Estos programas deben estar vigentes, tener al menos una generación de graduados, y referirse a las principales líneas de desarrollo disciplinario de la Institución."
      ],
      indicadores: [
        {valor: 85,  simbolo: "", background: "#b96170", icon: "", nombre: "Programas Ofertados Vigentes"},
        {valor: 1,   simbolo: "º", background: "#b96170", icon: "", nombre: "Universidad de la Región con Mayor Matrícula de Postgrado y Postítulo"},
        {valor: 1273,simbolo: "", background: "#b96170", icon: "", nombre: "Matrículados en Postgrado en el Año 2020"},
        {valor: 70,  simbolo: "%", background: "#b96170", icon: "", nombre: "De los Programas de Doctorado Innovados o en Proceso de Innovación"}
      ]
    },
    {
      nombre: 'Investigación',
      icon: 'home',
      descripcion: ["Por investigación se entienden las actividades sistemáticas de búsqueda de nuevo conocimiento, que impactan sustantivamente en la disciplina, tema o área a la que pertenecen. Sus resultados se expresan en publicaciones o en patentes."],
      indicadores: [
        {valor: 20,  simbolo: "", background: "#2a8090", icon: "", nombre: "Centros de Investigación Activos 2021"},
        {valor: 85,  simbolo: "", background: "#2a8090", icon: "", nombre: "Proyectos Adjudicados 2020 como Institucional Principal y Asociada"},
        {valor: 1235,simbolo: "", background: "#2a8090", icon: "", nombre: "Publicaciones Scopus 2020"},
        {valor: 909, simbolo: "", background: "#2a8090", icon: "", nombre: "Publicaciones Wos 2020"}
      ]
    },
    {
      nombre: 'Vinculación',
      icon: 'home',
      descripcion: ["La vinculación con el medio se refiere al conjunto de nexos establecidos con el medio disciplinario, artístico, tecnológico, productivo o profesional, con el fin de mejorar el desempeño de las funciones institucionales, de facilitar el desarrollo académico y profesional de los miembros de la Institución y su actualización o perfeccionamiento, o de cumplir con los objetivos institucionales."],
      indicadores: [
        {valor: 1409,simbolo: "", background: "#5050af", icon: "", nombre: "Estudiantes que Realizaron Movilidad desde el 2017 a 2020"},
        {valor: 330, simbolo: "", background: "#5050af", icon: "", nombre: "Convenios Decretados Nacionales e Internacionales desde el 2017 a 2020"},
        {valor: 23,  simbolo: "", background: "#5050af", icon: "", nombre: "Centros Comunitarios Vigentes"},
        {valor: 5,   simbolo: "", background: "#5050af", icon: "", nombre: "Carreras con Dobles Grados Vigentes"}
      ]
    }
  ];

  selectedSection: any;
  selectedIndex: number;
  
  constructor() { 
    this.initSections();
  }
  
  ngOnInit() {
  }

  initSections() {
    let index = localStorage.getItem('selectedArea');
    let event = {item: this.sections[index || 0], index: index || 0};
    this.selectSection(event);
  }

  selectSection(event: any){
    this.selectedSection = event.item;
    this.selectedIndex = event.index || 0;
    console.log(this.selectedSection);
  }

}
