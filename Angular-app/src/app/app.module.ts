import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { viniComponent } from 'src/vini/vini.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    viniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
