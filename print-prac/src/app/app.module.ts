import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintComponent } from './print/print.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
