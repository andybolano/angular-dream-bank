import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTransactionsComponent } from './account-transactions.component';
import { AccountTransactionsRoutingModule } from './account-transactions-routing.module';
import { SharedModule } from '@bank/shared/shared.module';



@NgModule({
  declarations: [
    AccountTransactionsComponent
  ],
  imports: [
    CommonModule,
    AccountTransactionsRoutingModule,
    SharedModule
  ]
})
export class AccountTransactionsModule { }
