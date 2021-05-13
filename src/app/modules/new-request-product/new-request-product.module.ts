import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductRequestComponent } from './new-request-product.component';
import { NewProductRequestRoutingModule } from './new-request-product-routing.module';



@NgModule({
  declarations: [
    NewProductRequestComponent
  ],
  imports: [
    CommonModule,
    NewProductRequestRoutingModule
  ]
})
export class NewProductRequestModule { }
