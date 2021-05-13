import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '@bank/core/guards/auth.guards';
import {PrivateComponent} from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    loadChildren: () => import('./with-navigation/with-navigation.module').then(mod => mod.WithNavigationModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'full-screen',
    component: PrivateComponent,
    loadChildren: () => import('./full-screen/full-screen.module').then(mod => mod.FullScreenModule),
    canActivate: [AuthGuard],
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {
}
