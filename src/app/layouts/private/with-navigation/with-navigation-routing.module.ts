import { ProductsModule } from './../../../modules/products/products.module';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WithNavigationComponent} from './with-navigation.component';

const routes: Routes = [
  {
    path: 'account-summary',
    component: WithNavigationComponent,
    loadChildren: () => import('../../../modules/account-summary/account-summary.module').then(mod => mod.AccountSummaryModule),
  },{
    path: 'account/:productId/transactions',
    component: WithNavigationComponent,
    loadChildren: () => import('../../../modules/account-transactions/account-transactions.module').then(mod => mod.AccountTransactionsModule),
  },
  {
    path: 'products',
    component: WithNavigationComponent,
    loadChildren: () => import('../../../modules/products/products.module').then(mod => mod.ProductsModule),
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithNavigationRoutingModule {
}
