import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSummaryComponent } from './account-summary.component';
import { AccountSummaryRoutingModule } from './account-summary-routing.module';
import { SharedModule } from '@bank/shared/shared.module';




@NgModule({
  declarations: [
      AccountSummaryComponent
  ],
  imports: [
    CommonModule,
    AccountSummaryRoutingModule,
    SharedModule
  ]
})
export class AccountSummaryModule { }
