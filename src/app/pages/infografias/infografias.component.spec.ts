import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfografiasComponent } from './infografias.component';

describe('InfografiasComponent', () => {
  let component: InfografiasComponent;
  let fixture: ComponentFixture<InfografiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfografiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfografiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
