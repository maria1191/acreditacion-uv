import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SectionComponent } from './pages/section/section.component';
import { IconsModule } from './icons/icons.module';
import { NgbCarouselModule, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ComitesComponent } from './pages/comites/comites.component';
import { EtapasComponent } from './pages/etapas/etapas.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { InfografiasComponent } from './pages/infografias/infografias.component';
import { FichaDatosComponent } from './pages/ficha-datos/ficha-datos.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { AreasComponent } from './pages/areas/areas.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

// Prime imports
import {DialogModule} from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';

import { registerLocaleData } from '@angular/common'; 
import localeEsCl from '@angular/common/locales/es-CL'; 
registerLocaleData(localeEsCl, 'es');

import { SafePipe } from 'src/app/services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    InicioComponent,
    ComitesComponent,
    EtapasComponent,
    AgendaComponent,
    InfografiasComponent,
    FichaDatosComponent,
    FaqComponent,
    NoticiasComponent,
    AreasComponent,
    IndicadoresComponent,
    NavMenuComponent,
    SafePipe
  ],
  imports: [
    IconsModule,
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    BrowserAnimationsModule,
    DialogModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
