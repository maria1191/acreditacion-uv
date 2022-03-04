import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  indicadores = [
    {area: "Gestión", valor: 150207,simbolo: "", background: "#2762b9", icon: "settings", nombre: "Mts construidos 2020"},
    {area: "Pregrado", valor: 15624,simbolo: "", background: "#1b9db5", icon: "edit-2", nombre: "Matriculados total UV 2021"},
    {area: "Postgrado", valor: 85,simbolo: "", background: "#b96170", icon: "book", nombre: "Programas de Postgrado y Postitulo vigentes"},
    {area: "Investigación", valor: 20,simbolo: "", background: "#2a8090", icon: "search", nombre: "Centros de investigación activos 2021"},
    {area: "Vinculación", valor: 1409,simbolo: "", background: "#5050af", icon: "slack", nombre: "Estudiantes que realizaron movilidad desde 2017 a 2020"},
  ];


  constructor() { }

  ngOnInit() {
  }

}
