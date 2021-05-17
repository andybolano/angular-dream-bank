import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductRequestComponent } from './new-request-product.component';
import { NewProductRequestRoutingModule } from './new-request-product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@bank/shared/shared.module';
import { NgSelect2Module } from 'ng-select2';



@NgModule({
  declarations: [
    NewProductRequestComponent
  ],
  imports: [
    CommonModule,
    NewProductRequestRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgSelect2Module
  ]
})
export class NewProductRequestModule { }
