import { Component, OnInit } from '@angular/core';

import {todosciclos} from '../ciclos/todosciclos'

@Component({
  selector: 'app-cursadas',
  templateUrl: './cursadas.component.html',
  styleUrls: ['./cursadas.component.css']
})

export class CursadasComponent implements OnInit {

  ciclos = todosciclos
  felipe = 0
  matheus = 0
  afazer = 0
  mediaM = 0
  mediaF = 0
  mediaG = 0

  getFelipe(){
    for(let i= 0; i < this.ciclos.length; i++){
      if(this.ciclos[i].aprovadof == true){
        this.felipe = this.felipe + 1
      }
      this.mediaF = this.mediaF + Number(this.ciclos[i].notaf) 
    }
    this.mediaF = this.mediaF/this.felipe
    this.mediaF = Number(this.mediaF.toFixed(2))
  }

  getMatheus(){
    for(let i= 0; i < this.ciclos.length; i++){
      if(this.ciclos[i].aprovadom == true){
        this.matheus = this.matheus + 1
      }
    this.mediaM = this.mediaM + Number(this.ciclos[i].notam) 
    }
    this.mediaM = this.mediaM/this.matheus
    this.mediaM = Number(this.mediaM.toFixed(2))
  }

  getTotal(){
    this.mediaG = Number(((this.mediaF+this.mediaM)/2).toFixed(2))
  }

  constructor() { 

  }

  ngOnInit() {

    this.getFelipe()
    this.getMatheus()
    this.getTotal()
    
  }

}