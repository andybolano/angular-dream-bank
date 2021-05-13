import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSummaryComponent } from './account-summary.component';
import { AccountSummaryRoutingModule } from './account-summary-routing.module';




@NgModule({
  declarations: [
      AccountSummaryComponent
  ],
  imports: [
    CommonModule,
    AccountSummaryRoutingModule
  ]
})
export class AccountSummaryModule { }
