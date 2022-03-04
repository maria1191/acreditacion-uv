import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComitesComponent } from './comites.component';

describe('ComitesComponent', () => {
  let component: ComitesComponent;
  let fixture: ComponentFixture<ComitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
