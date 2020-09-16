import { Component, OnInit } from '@angular/core';

import {todosciclos} from '../ciclos/todosciclos'


@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  ciclos = todosciclos

  constructor() { }

  ngOnInit() {
  }

}