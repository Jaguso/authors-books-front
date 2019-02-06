import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuthorsComponent } from './create-authors.component';

describe('CreateAuthorsComponent', () => {
  let component: CreateAuthorsComponent;
  let fixture: ComponentFixture<CreateAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
