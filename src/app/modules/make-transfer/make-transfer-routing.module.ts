import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeTransferComponent } from './make-transfer.component';

const routes: Routes = [
    {
        path: '',
        component: MakeTransferComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MakeTransferRoutingModule { }
