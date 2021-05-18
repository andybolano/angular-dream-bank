import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
        ToastrModule.forRoot({
          positionClass: 'toast-top-full-width'
        }),

  ],
  providers: [
    CookieService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
