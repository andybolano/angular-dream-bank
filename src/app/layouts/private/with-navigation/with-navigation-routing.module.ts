import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WithNavigationComponent} from './with-navigation.component';

const routes: Routes = [
  {
    path: 'account-summary',
    component: WithNavigationComponent,
    loadChildren: () => import('../../../modules/account-summary/account-summary.module').then(mod => mod.AccountSummaryModule),
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithNavigationRoutingModule {
}
