import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FullScreenComponent} from './full-screen.component';

const routes: Routes = [
  
  {
    path: 'new-request-product',
    component: FullScreenComponent,
    loadChildren: () => import('../../../modules/new-request-product/new-request-product.module').then(mod => mod.NewProductRequestModule),
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullScrenRoutingModule {
}
