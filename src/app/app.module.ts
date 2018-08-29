import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AreaDeConhecimentoComponent } from './area-de-conhecimento/area-de-conhecimento.component';
import { SegmentosComponent } from './segmentos/segmentos.component';
import { MatrizDeEnsaioComponent } from './matriz-de-ensaio/matriz-de-ensaio.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { CadastrarLaboratorioComponent } from './cadastrar-laboratorio/cadastrar-laboratorio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    AreaDeConhecimentoComponent,
    SegmentosComponent,
    MatrizDeEnsaioComponent,
    LaboratorioComponent,
    CadastrarLaboratorioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
