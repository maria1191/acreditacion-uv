import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  @Input() banner: boolean = false;
  @Output() onSelectNoticia = new EventEmitter<any>();
  noticias: any[];

  constructor(private databaseService: DatabaseService) { 
    this.noticias = this.databaseService.getNoticias(0, 9);
  }


  ngOnInit() {

  }

  verNoticia(n) {
    this.onSelectNoticia.emit(n);
  }

}
