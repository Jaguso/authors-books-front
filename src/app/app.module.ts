import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CreateAuthorsComponent } from './components/create-authors/create-authors.component';
import { ListAuthorsComponent } from './components/list-authors/list-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAuthorsComponent,
    ListAuthorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
