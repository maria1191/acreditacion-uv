import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() sections: any[];
  @Input() set section(s: any) {
    this.selectSection(s);
  };
  @Output() onSelectSection = new EventEmitter<any>()

  selectedSection: any;
  selectedSubSection: any;
  selectedTabla: any;

  constructor() {
    //this.selectedSection = localStorage.getItem('selectedSection');
    //this.selectedSubSection = localStorage.getItem('selectedSubSection');
  }

  selectSection(section: any){
    this.selectedSection = section;
    let subsection = this.selectedSection && this.selectedSection.subsections && this.selectedSection.subsections.length? this.selectedSection.subsections[0]: null;
    this.selectSubSection(subsection);
    this.onSelectSection.emit(this.selectedSection);
  }

  selectSubSection(subSection: any){
    this.selectedSubSection = subSection;
    let tabla = this.selectedSubSection && this.selectedSubSection.tablas && this.selectedSubSection.tablas.length? this.selectedSubSection.tablas[0]: null;
    this.selectTabla(tabla)
  }
  selectTabla(tabla) {
    this.selectedTabla = tabla;
  }
  ngOnInit() {
  }

  _hashtag(text) {
    return text.split('#');
  }
  getColspan(text){
    let arr = this._hashtag(text);
    let colspan = arr && arr.length == 1? 1: arr[1];
    return colspan;
  }
  getHeader(text){
    let arr = this._hashtag(text);
    let header = arr && arr.length == 1? arr[0]: arr[2];
    return header;
  }

}
