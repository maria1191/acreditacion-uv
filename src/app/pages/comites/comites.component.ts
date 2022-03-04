import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comites',
  templateUrl: './comites.component.html',
  styleUrls: ['./comites.component.css']
})
export class ComitesComponent implements OnInit {

  comision_calidad = {
    subtitle: "Coordinación general del proceso de Autoevaluación",
    body: "Revisión de resportes e Informe Autoevaluación",
    integrantes: [
      {nombre: "	Osvaldo Corrales	", cargo: "	Rector	", foto: "assets/rector.png"},
      {nombre: "	Christian Corvalán	", cargo: "	Prorrector	", foto: "assets/comites/cristiancorvalan.png"},
      {nombre: "	Cristian Moyano	", cargo: "	Contralor general	", foto: "assets/comites/contralor.png"},
      {nombre: "	Daniela Marzi	", cargo: "	Secretaria general	", foto: "assets/comites/danielamarzi.jpeg"},
      {nombre: "	Carlos Becerra	", cargo: "	Vicerrector académico	", foto: "assets/comites/carlosbecerra.png"},
      {nombre: "	Soledad Torres	", cargo: "	Vicerrectora investigación	", foto: "assets/comites/soledadtorres.png"},
      {nombre: "	Carlos Lara	", cargo: "	Vicerrector vinculación con el medio	", foto: "assets/comites/carloslara.png"},
      {nombre: "	Juan Sandoval	", cargo: "	Decano facultad Ciencias Sociales	", foto: "assets/comites/juansandoval.png"},
      {nombre: "	Soledad Narea	", cargo: "	Directora general desarrollo institucional y aseguramiento de la calidad	", foto: "assets/comites/soledadnarea.png"},
      {nombre: "	Daniela Moya	", cargo: "	Directora autoevaluación y acreditación	", foto: "assets/comites/danielamoya.jpeg"},
      {nombre: "	Marco Aravena	", cargo: "	Encargado Plan de modernización de la Gestión institucional	", foto: "assets/comites/marcoaravena.png"},
      {nombre: "	David Carrillo	", cargo: "	Representante gabinete Rector	", foto: "assets/comites/davidcarrillo.png"}
    ]
  };
  comision_tecnico = {
    subtitle: "Dar soporte técnico y logístico al proceso de Autoevaluación",
    body: "Taller diagnóstico, levantamiento y análisis información, entrega de Reportes de Fase a Comité Calidad, revisión Reportes Comisiones Área, construcción-redacción Informe Autoevaluación",
    integrantes: [
      {nombre: "	Soledad Narea	", cargo: "	Directora general desarrollo institucional y aseguramiento de la calidad	"},
      {nombre: "	Daniela Moya	", cargo: "	Director autoevaluación y acreditación (DAA)	"},
      {nombre: "	Paula Quiroz	", cargo: "	Directora Planificación	"},
      {nombre: "	Fuad Hatibovic	", cargo: "	Director Análisis institucional	"},
      {nombre: "	Silvana García	", cargo: "	Profesional DAA	"},
      {nombre: "	Claudia Allendes	", cargo: "	Asesora redacción/contraparte Comisión Investigación	"},
      {nombre: "	Alejandro Villela	", cargo: "	Contraparte Comisión Gestión	"},
      {nombre: "	Yenny Olivares/Priscilla Berrios	", cargo: "	Contraparte Comisión Vinculación con el medio	"},
      {nombre: "	Alejandro Villela	", cargo: "	Contraparte Comisión Pregrado	"},
      {nombre: "	Alejandro Villela	", cargo: "	Contraparte Comisión Posgrado	"},
      {nombre: "	Karin Berlien	", cargo: "	Encargada Unidad Igualdad y Diversidad	"}
    ]
  };

  comision_subtitle = "Implementación de autoevaluación por área, con tareas y plazos determinados";
  comision_body = "Diagnóstico Plan de Mejoras,  Ajustes Plan de Mejoras, levantamiento y sistematización información Área entrega Reportes de Fase, construcción Informe Autoevaluación Área";
  subcomision_subtitle = "Levantamiento y sistematización información específica requerida desde cada comisión";

  sections = [
    {
      nombre: 'Gestión',
      icon: 'home',
      comision: [
          {nombre: "	Christian Corvalán	", cargo: "	Prorrector	"},
          {nombre: "	Esteban Sefair	", cargo: "	Decano Facultad Ingeniería	"},
          {nombre: "	Antonio Peñafiel	", cargo: "	Director general económico	"},
          {nombre: "	Juan Pablo Jaña	", cargo: "	Director de gestión y desarrollo de personas	"},
          {nombre: "	Marco Aravena	", cargo: "	Director de tecnologías de información y comunicación	"},
          {nombre: "	Víctor Inostroza	", cargo: "	Director de infraestructura	"},
          {nombre: "	Jorge Dip	", cargo: "	Director de administración y logística	"},
          {nombre: "	Pierina Penna	", cargo: "	Directora de asuntos estudiantiles	"},
          {nombre: "	Rodrigo Kaplan	", cargo: "	Académica	"},
          {nombre: "	Gabriel Parra	", cargo: "	Estudiante	"},
          {nombre: "	David López	", cargo: "	Funcionario	"},
          {nombre: "	Alejandro Villela	", cargo: "	Contraparte Comité técnico	"}
      ],
      nombre_subcomision: 'Subcomisión Campus',
      subcomision: [                  
        {nombre: "	Oscar Fariña	", cargo: "	Decano Facultad de Ciencias Económicas y Administrativas	"},
        {nombre: "	Valeria Scapini	", cargo: "	Directora Campus Santiago	"},
        {nombre: "	Francisco Pantoja	", cargo: "	Director Campus Santiago	"},
      ]
    },
    {
      nombre: 'Pregrado',
      icon: 'home',
      comision: [
        {nombre: "	Carlos Becerra	", cargo: "	Vicerrector académico	"},
        {nombre: "	Osvaldo Bizama	", cargo: "	Director general de pregrado	"},
        {nombre: "	Marcela Alviña	", cargo: "	Decana de química y farmacia	"},
        {nombre: "	Gastón Zamora	", cargo: "	Decano Odontología (Subcomisión Carrera académica)	"},
        {nombre: "	Magdalena Silva	", cargo: "	Encargada de departamento para el desarrollo académico	"},
        {nombre: "	Virginia Sánchez	", cargo: "	Unidad de gestión administrativa académica	"},
        {nombre: "	Patricia Reyes	", cargo: "	Directora de bibliotecas y recursos para el aprendizaje	"},
        {nombre: "	Loreto González	", cargo: "	Profesional Pregrado	"},
        {nombre: "	Susana Cáceres	", cargo: "	Integrante Consejo pregrado	"},
        {nombre: "	Denisse Pérez	", cargo: "	Académica	"},
        {nombre: "	Patricio Ortíz	", cargo: "	Estudiante	"},
        {nombre: "	Alejandro Villela	", cargo: "	Contraparte Comité técnico "}
      ],
      nombre_subcomision: 'Subcomisión Pedagogías',
      subcomision: [                  
        {nombre: "	Leopoldo Benavides	", cargo: "	Decano de Humanidades (Subcomisión Pedagogía)	"},        
      ]
    },
    {
      nombre: 'Postgrado',
      icon: 'home',
      comision: [
        {nombre: "	Carlos Becerra	", cargo: "	Vicerrector académico	"},
        {nombre: "	Angélica Mosqueda	", cargo: "	Directora general de posgrado	"},
        {nombre: "	Juan Kuznar	", cargo: "	Decano Ciencias	"},
        {nombre: "	Anita Fredes	", cargo: "	Profesional posgrado	"},
        {nombre: "	Ingrid Vargas	", cargo: "	Integrante Consejo posgrado	"},
        {nombre: "	Valeria Silva	", cargo: "	Representante estudiante Doctorado Neurociencias	"},
        {nombre: "	Alejandro Villela	", cargo: "	Contraparte Comité técnico	"},
      ],
      nombre_subcomision: 'Subcomisión Especialidades Médicas',
      subcomision: [        
        {nombre: "	Antonio Orellana	", cargo: "	Decano Medicina	"},
      ]
    },
    {
      nombre: 'Investigación',
      icon: 'home',
      comision: [
        {nombre: "	Soledad Torres	", cargo: "	Vicerrectora de investigación	"},
        {nombre: "	Oliver Schmachtenberg	", cargo: "	Director de investigación	"},
        {nombre: "	Alejandro Dinamarca	", cargo: "	Director de transferencia y tecnología	"},
        {nombre: "	Juan Kuznar	", cargo: "	Decano Facultad de Ciencias	"},
        {nombre: "	Karla Veas	", cargo: "	Profesional posgrado	"},
        {nombre: "	Raúl Vinet	", cargo: "	Académico	"},
        {nombre: "	Carla Rimassa	", cargo: "	Integrante Consejo investigación	"},
        {nombre: "	Mónica Iglesias	", cargo: "	Integrante Consejo Investigación	"},
        {nombre: "	Ileana Araque	", cargo: "	Estudiante doctorado	"},
        {nombre: "	Claudia Allendes	", cargo: "	Contraparte Comité técnico	"}
      ]
    },
    {
      nombre: 'Vinculación',
      icon: 'home',
      comision: [
        {nombre: "	Carlos Lara	", cargo: "	Vicerrector de vinculación con el medio	"},
        {nombre: "	Pilar Muñoz	", cargo: "	Directora de extensión y comunicaciones	"},
        {nombre: "	José Luis Meza	", cargo: "	Director de relaciones institucionales	"},
        {nombre: "	Yenny Olivares	", cargo: "	Encargada de Unidad de medio ambiente y sostenibilidad	"},
        {nombre: "	Juan Luis Moraga	", cargo: "	Decano Facultad de Arquitectura	"},
        {nombre: "	Fernando Rojas	", cargo: "	Integrante Consejo de Vinculación con el medio	"},
        {nombre: "	Oriana Córdova	", cargo: "	Funcionaria	"},
        {nombre: "	Mauricio Hernández	", cargo: "	Estudiante	"},
        {nombre: "	Yenny Olivares/Priscilla Berrios	", cargo: "	Contraparte Comité técnico	"}
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
    let index = localStorage.getItem('selectedComision');
    let event = {item: this.sections[index || 0], index: index || 0};
  }

  selectSection(event: any){
    this.selectedSection = event.item;
    this.selectedIndex = event.index;
  }



}
