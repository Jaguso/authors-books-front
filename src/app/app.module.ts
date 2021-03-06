import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CreateAuthorsComponent } from './components/create-authors/create-authors.component';
import { ListAuthorsComponent } from './components/list-authors/list-authors.component';

import { AuthorsService } from './services/authors.service';

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
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
