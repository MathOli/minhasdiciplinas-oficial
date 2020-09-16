import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { CursadasComponent } from './cursadas/cursadas.component';
import { DisciplinasDetalhesComponent } from './disciplinas-detalhes/disciplinas-detalhes.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'disciplinas',component: DisciplinasComponent},
      {path:'disciplinas/:index',component: DisciplinasDetalhesComponent},
      {path:'quemsomos',component: QuemsomosComponent},
      {path:'ondestamos',component: CursadasComponent},
    ])
     ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, QuemsomosComponent, DisciplinasComponent, CursadasComponent, DisciplinasDetalhesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
