import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component'
import { NgSelect2Module } from 'ng-select2';
import { DynamicPipe } from '@bank/core/pipes/dynamic.pipe';
import { Select2Component } from './components/select2/select2.component';
import { DateFilterComponent } from './components/date-filter/date-filter.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelect2Module

    ],
    declarations: [
        TableComponent,
        Select2Component,
        DynamicPipe,
        Select2Component,
        DateFilterComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelect2Module,
        TableComponent,
        Select2Component,
        DateFilterComponent

    ],
    providers: [

    ]
})
export class SharedModule { }
