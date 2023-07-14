import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistanceComponent } from './interface/resistance/resistance.component';

@NgModule({
  declarations: [
    AppComponent,
    ResistanceComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
