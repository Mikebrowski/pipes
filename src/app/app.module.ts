import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpipeComponent } from './mainpipe/mainpipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SummaryPipe } from './mainpipe/custompipe';
import { FormsModule } from '@angular/forms';
import { ComplexPipe } from './mainpipe/morecomplex';
@NgModule({
  declarations: [
    AppComponent,
    MainpipeComponent,
    SummaryPipe,
    ComplexPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
