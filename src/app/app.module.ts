import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Feature1Module } from './modules/feature1/features1.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Feature1Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
