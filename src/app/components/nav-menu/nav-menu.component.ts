import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {


  @Input() mainMenu: boolean;
  @Input() set items(items: any[]){
    this.sections = items;
    let index = localStorage.getItem(this.sectionLabel);
    this.selectSection(this.sections[index || 0], index || 0);
  };
  @Input() sectionLabel: string = 'selectedSection';
  @Input() selectedSection: any;
  @Input() selectedIndex: number;
  @Output() OnSelectSection = new EventEmitter<any>();

  sections: any[];
  collapsedMenu: boolean = true;

  constructor() { 
  }

  selectSection(section: any, index: any){
    this.selectedSection = section;
    this.selectedIndex = index || 0;
    localStorage.setItem(this.sectionLabel, index);
    this.OnSelectSection.emit({item: this.selectedSection, index: this.selectedIndex})

    if(!this.collapsedMenu) {
      this.toggleMenu();
    }
  }
  toggleMenu() {
    this.collapsedMenu = !this.collapsedMenu;
  }
  
  ngOnInit() {
  }

}
