import { MakeTransferRoutingModule } from './make-transfer-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeTransferComponent } from './make-transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@bank/shared/shared.module';



@NgModule({
  declarations: [
    MakeTransferComponent
  ],
  imports: [
    CommonModule,
    MakeTransferRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class MakeTransferModule { }
