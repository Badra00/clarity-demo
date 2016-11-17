import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { HomeComponent } from './home/home.component';

import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { InputsComponent } from './inputs/inputs.component';

const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'inputs', component: InputsComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablesComponent,
    InputsComponent
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
