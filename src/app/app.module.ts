import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { HomeComponent } from './home/home.component';

import { AppComponent } from './app.component';
import { InputsComponent } from './inputs/inputs.component';
import { RadiosComponent } from './radios/radios.component';

const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'radios', component: RadiosComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputsComponent,
    RadiosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
