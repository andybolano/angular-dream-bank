import { ProductsRoutingModule } from './../products/products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@bank/shared/shared.module';
import { ProductsComponent } from '../products/products.component';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    SharedModule,
  ]
})

export class ProductsModule { }
