import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateAuthorsComponent } from './components/create-authors/create-authors.component';
import { ListAuthorsComponent } from './components/list-authors/list-authors.component';

const routes: Routes = [
  { path: '', component: CreateAuthorsComponent },
  { path: 'authorslist', component: ListAuthorsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateAuthorsComponent,
    ListAuthorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
