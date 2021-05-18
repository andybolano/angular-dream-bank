import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ITable } from '../../interfaces';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

    @Input() config:ITable [] = [];
    @Input() data: [] = [];
    @Input() title: string = "";
    @Output() Selected = new EventEmitter();
    dataTable  = [];

    constructor() { }

    ngOnInit(): void {
    }

    selectedRow(row:any, type:string = ""){
      row.typeAction = type;
      this.Selected.emit(row);
    }

    ngOnChanges(changes:any) {
        if (changes.data) {
           this.dataTable = this.data;
        }
    }

}
