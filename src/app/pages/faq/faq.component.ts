import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {


  preguntas = [{
      id: 'pregunta-0',
      collapsed: true,
      enunciado: '¿Qué es la Acreditación Institucional?',
      respuesta: 'Es un proceso de evaluación externa al que deben someterse obligatoriamente las instituciones de educación superior autónomas del país; las carreras de pregrado consideradas "de acreditación obligatoria" (según lo establece la ley, estas son Medicina, Odontología y todas las Pedagogías); y los programas de doctorado y las especialidades del área de la salud que ellas imparten. Se trata de una certificación de calidad de sus procesos internos y sus resultados.'
    }, {
      id: 'pregunta-1', 
      collapsed: true,
      enunciado: '¿Qué mide la acreditación?',
      respuesta: 'Existen los siguientes procesos de acreditación, independientes entre sí: la acreditación institucional, la de carreras de pregrado, la de programas de postgrado y la de especialidades del área de la salud (médicas y odontológicas). - LA ACREDITACIÓN INSTITUCIONAL certifica el cumplimiento del proyecto de la institución y la existencia, aplicación y resultados de mecanismos eficaces de autorregulación y de aseguramiento de la calidad, al interior de las mismas. - LA ACREDITACIÓN DE LAS CARRERAS DE PREGRADO CON ACREDITACIÓN OBLIGATORIA Y DE LOS POSTGRADOS certifica la calidad en función de los propósitos declarados por estas instancias y de los criterios establecidos por las respectivas comunidades académicas y profesionales. Una institución no acreditada puede tener carreras y postgrados acreditados, pues son procesos independientes. Sin embargo la ley de Educación Superior (N° 29.091) establece un plazo máximo en el que todas las instituciones deberán estar obligatoriamente acreditadas (enero 2020).'
    }, {
      id: 'pregunta-1',  
      collapsed: true,
      enunciado: '¿Cuáles son los beneficios de la acreditación?',
      respuesta: 'Cuando una institución, programa o carrera está acreditado, cuenta con la certificación otorgada por CNA respecto de la implementación de sus mecanismos de aseguramiento de la calidad y sus resultados. Además, los alumnos nuevos que se incorporen a instituciones acreditadas, podrán acceder a financiamiento estatal o recursos que cuenten con garantía fiscal para el financiamiento de sus estudios. En el caso de los postgrados acreditados, sus alumnos podrán optar a fondos concursables de becas con financiamiento estatal.'
    }, {
      id: 'pregunta-1',
      collapsed: true,
      enunciado: '¿Qué sucede si contaba con financiamiento estatal y la institución pasa de estar acreditada a no acreditada?',
      respuesta: 'La ley establece que los alumnos nuevos de instituciones que no cuenten con la acreditación, no podrán acceder a ningún tipo de recursos otorgados por el Estado o que cuenten con su garantía. Los alumnos antiguos que ya contaban anteriormente con este crédito no tendrán problema en mantenerlo. Para más detalles sobre este tema, sugerimos ver detalle de condiciones en portales del Mineduc www.mifuturo.cl y www.becasycreditos.cl.'
      
    }, {
      id: 'pregunta-1', 
      collapsed: true,
      enunciado: '¿Por cuánto tiempo se extiende la vigencia de la acreditación?',
      respuesta: 'La acreditación institucional, por un plazo máximo de hasta 7 años. La acreditación de carreras, por un plazo máximo de hasta 7 años. La acreditación de postgrados, por un plazo máximo de hasta 10 años. La cantidad de años se otorga en conformidad con el nivel de cumplimiento de los criterios de evaluación y los propósitos de las instituciones o programas. Al cabo del plazo otorgado, las instituciones podrán repetir el proceso, con el fin de optar a un nuevo período de acreditación.'
    }
  ];

  constructor() {}

  ngOnInit() {
  }

  collapsePregunta(p: any) {
    p.collapsed = !p.collapsed;
  }
}
