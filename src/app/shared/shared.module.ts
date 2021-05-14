import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component'



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        TableComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TableComponent,

    ],
    providers: [

    ]
})
export class SharedModule { }
