import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-authors',
  templateUrl: './create-authors.component.html',
  styleUrls: ['./create-authors.component.css']
})
export class CreateAuthorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  authorsForm = new FormGroup({
    name: new FormControl(''),
    nationality: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.authorsForm.value);
  }

}
