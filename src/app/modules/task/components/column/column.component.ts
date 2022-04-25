import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit, OnChanges {

  //@Input() data!:Array<{id:string, name:string}> // usar en caso de no saber que tipo de dato es !
  @Input() data:Array<{id:string, name:string}> = [] // pero es preferible inicializar.
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('--->',  changes)
  }

  ngOnInit(): void {
  }

}
