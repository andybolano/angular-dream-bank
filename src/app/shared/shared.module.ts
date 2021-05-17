import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component'
import { NgSelect2Module } from 'ng-select2';
import { DynamicPipe } from '@bank/core/pipes/dynamic.pipe';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelect2Module,

    ],
    declarations: [
        TableComponent,
        DynamicPipe
    ],
    exports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelect2Module,
        TableComponent

    ],
    providers: [

    ]
})
export class SharedModule { }
