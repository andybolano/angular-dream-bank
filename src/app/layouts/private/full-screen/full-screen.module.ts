import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullScrenRoutingModule } from './full-screen-routing.module';
import { FullScreenComponent } from './full-screen.component';



@NgModule({
  declarations: [
    FullScreenComponent
  ],
  imports: [
    CommonModule,
    FullScrenRoutingModule
  ]
})
export class FullScreenModule { }
