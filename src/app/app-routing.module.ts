import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./layouts/public/public.module').then(mod => mod.PublicModule)
    },
    {
        path: '',
        loadChildren: () => import('./layouts/private/private.module').then(mod => mod.PrivateModule)
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

