import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductRequestComponent } from './new-request-product.component';

const routes: Routes = [
    {
        path: '',
        component: NewProductRequestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewProductRequestRoutingModule { }