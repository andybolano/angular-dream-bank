import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.css']
})
export class Select2Component implements OnInit {

     @Input() data: [] = [];
     @Input() placeholder: string = "Search...";
     /** Salida del componente cuando un elemento es seleccionado */
     @Output() Selected = new EventEmitter();

     dataSelect:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

    /**
     * Método que se ejecuta cuando las entradas del componente cambian
     * @param changes
     */
     ngOnChanges(changes:any) {
      if (changes.data) {
         this.dataSelect = this.data;
      }
  }

  changed(e:any){
    this.Selected.emit(e);
  }

}
