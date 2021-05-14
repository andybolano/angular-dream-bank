import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountTransactionsComponent } from './account-transactions.component';

const routes: Routes = [
    {
        path: '',
        component: AccountTransactionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountTransactionsRoutingModule { }