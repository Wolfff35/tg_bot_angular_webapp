import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTestPageComponent } from './my-test-page/my-test-page.component';

@NgModule({
  declarations: [AppComponent, MyTestPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [MyTestPageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
