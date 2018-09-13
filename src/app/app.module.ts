import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './/app-routing.module';
import { ElementiComponent } from './elementi/elementi.component';
import { MaterialiComponent } from './materiali/materiali.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ElementiComponent,
    MaterialiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
