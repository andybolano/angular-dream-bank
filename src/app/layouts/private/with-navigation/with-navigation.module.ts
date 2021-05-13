import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithNavigationRoutingModule } from './with-navigation-routing.module';
import { WithNavigationComponent } from './with-navigation.component';
import { HeaderComponent } from '@bank/layouts/components/header/header.component';
import { NavbarComponent } from '@bank/layouts/components/navbar/navbar.component';
import { ProfileComponent } from '@bank/layouts/components/profile/profile.component';



@NgModule({
  declarations: [
    WithNavigationComponent,
    HeaderComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    WithNavigationRoutingModule,
    CommonModule
  ]
})
export class WithNavigationModule { }
