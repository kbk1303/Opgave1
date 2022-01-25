import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPalComponent } from './my-pal/my-pal.component';
import { DataFromJsonComponent } from './data-from-json/data-from-json.component';
import {HttpClientModule} from '@angular/common/http';
import { DataFromJsonRandomComponent } from './data-from-json-random/data-from-json-random.component';


@NgModule({
  declarations: [
    AppComponent,
    MyPalComponent,
    DataFromJsonComponent,
    DataFromJsonRandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
