import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInternshipDialogComponent } from './new-internship-dialog.component';

describe('NewInternshipDialogComponent', () => {
  let component: NewInternshipDialogComponent;
  let fixture: ComponentFixture<NewInternshipDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInternshipDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInternshipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
