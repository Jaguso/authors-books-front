import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent implements OnInit {

  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    this.authorsService.getAuthors().subscribe((authors) => {
      console.log(authors);
    });
  }

}
