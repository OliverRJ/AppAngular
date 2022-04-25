import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
/*
  listUser:Array<{id: string, name:string}>=[
    {
      id: '1',
      name: 'Leifer'
    },
    {
      id: '2',
      name: 'maria'
    },
    {
      id: '3',
      name: 'oliver'
    },
  ]

  results:Array<string>=[
    'Respuesta 1',
    'Respuesta 2',
    'Respuesta 3',
    'Respuesta 4',
  ]

  resultsFilter:Array<string>=[
  ]


  case:number = 122;

*/
  groups: Array<any>=[];

  showText = true;
  constructor() { }

  // se usa para llamadas a servicios o para inicializar variables.
  ngOnInit(): void {
    this.groups = [
      {
        label: 'Nuevos',
        color: 'tomato',
        list:[]
      }
    ]
  }

  changeText():void{
    this.showText = !this.showText;
  }

}
