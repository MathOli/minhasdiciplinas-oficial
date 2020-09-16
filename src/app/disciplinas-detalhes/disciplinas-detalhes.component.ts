import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {todosciclos} from '../ciclos/todosciclos'

@Component({
  selector: 'app-disciplinas-detalhes',
  templateUrl: './disciplinas-detalhes.component.html',
  styleUrls: ['./disciplinas-detalhes.component.css']
})
export class DisciplinasDetalhesComponent implements OnInit {
  ciclo

  constructor(private router: ActivatedRoute) { 
  }

  ngOnInit() {
      this.router.paramMap.subscribe(params => {
      this.ciclo = todosciclos[params.get('index')];
    }
    );

  }

}