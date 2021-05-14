import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    /** Configuracion de la tabla */
    @Input() config: [] = [];

    /** Data de la tabla */
    @Input() data: [] = [];

    @Input() title: string = "";

    /** Salida del componente cuando un elemento es seleccionado */
    @Output() Selected = new EventEmitter();

    /** Data que se muestra en la tabla */
    dataTable  = [];

    constructor() { }

    ngOnInit(): void {
    }

    selectedRow(row:any){
        this.Selected.emit(row);
    }

    /**
     * Método que se ejecuta cuando las entradas del componente cambian
     * @param changes 
     */
    ngOnChanges(changes:any) {
        if (changes.data) {
           this.dataTable = this.data;
        }
    }

}
