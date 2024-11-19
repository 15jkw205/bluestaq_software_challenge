import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component'; 
import { PoetComponent } from './poet/poet.component'; 

@NgModule({ 
  declarations: [AppComponent, PoetComponent], 
  imports: [BrowserModule, FormsModule, HttpClientModule], 
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
