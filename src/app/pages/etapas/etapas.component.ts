import { Component, OnInit } from '@angular/core';


// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 

@Component({
  selector: 'etapas',
  templateUrl: './etapas.component.html',
  styleUrls: ['./etapas.component.css']
})
export class EtapasComponent {

  etapa1 = [
    {
      name: "Etapa 1:\nEVALUACIÓN\nINTERNA",
      value: 2000,
      chartId: 'etapa1',
      children: [
        {
          name: "Planificación\nproceso\nAutoevaluación",
          value: 1200
        },
        {
          name: "Recopilación\nInformación",
          value: 1200
        },
        {
          name: "Seguimiento\nplanes de\nmejora",
          value: 1200
        },
        {
          name: "Análisis",
          value: 1200
        },
        {
          name: "Evaluación",
          value: 1200
        },
        {
          name: "Informe\nAutoevaluación",
          value: 1200,
          icon: 'image.svg'
        },

      ]
    }
  ];

  etapa2 = [
    {
      name: "Etapa 2:\nEVALUACIÓN\nEXTERNA",
      value: 2000,
      chartId: 'etapa2',
      children: [
        {
          name: "Visita de\nEvaluación\nExterna",
          value: 1200
        },
        {
          name: "Informe de\nEvaluación\nExterna",
          value: 1200
        },
        {
          name: "Respuesta\nInstitucional",
          value: 1200
        }
      ]
    }
  ];

  etapa3 = [
    {
      name: "Etapa 3:\nPRONUNCIAMIENTO\nDE LA COMISIÓN",
      value: 2000,
      chartId: 'etapa3',
      children: [
        {
          name: "Recopilación\nInformación",
          value: 1200
        },
        {
          name: "Análisis",
          value: 1200
        }
      ]
    }
  ];

  etapas: any[];

  constructor() { 
    // Themes begin
    am4core.useTheme(am4themes_animated);
    console.log(am4core)
  }

  ngAfterViewInit() {
    this.etapas = [this.etapa1, this.etapa2, this.etapa3];
    setTimeout(() => {
      for (let i = 0; i < this.etapas.length; i++) {
        this.initChart(this.etapas[i], 'etapa'+(i+1) );
      }
    }, 700);
  }

  initChart(chartData: any[], chart_id) {

    // Themes end
    var chart = am4core.create(chart_id, am4plugins_forceDirected.ForceDirectedTree);
    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    chart.data = chartData;

      networkSeries.dataFields.value = "value";
      networkSeries.dataFields.name = "name";
      networkSeries.dataFields.children = "children";
      //networkSeries.nodes.template.tooltipText = "{name}";
      networkSeries.nodes.template.fillOpacity = 1;

      networkSeries.nodes.template.label.text = "{name}"
      networkSeries.fontSize = 15;

      networkSeries.links.template.strokeWidth = 3;

      var hoverState = networkSeries.links.template.states.create("hover");
      hoverState.properties.strokeWidth = 6;
      hoverState.properties.strokeOpacity = 1;

      networkSeries.nodes.template.events.on("over", function(event) {
        event.target.dataItem.childLinks.each(function(link) {
          link.isHover = true;
        })
        if (event.target.dataItem.parentLink) {
          event.target.dataItem.parentLink.isHover = true;
        }

      })

      networkSeries.nodes.template.events.on("out", function(event) {
        event.target.dataItem.childLinks.each(function(link) {
          link.isHover = false;
        })
        if (event.target.dataItem.parentLink) {
          event.target.dataItem.parentLink.isHover = false;
        }
      })

  }

}
