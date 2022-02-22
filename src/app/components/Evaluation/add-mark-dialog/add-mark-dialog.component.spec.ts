import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarkDialogComponent } from './add-mark-dialog.component';

describe('AddMarkDialogComponent', () => {
  let component: AddMarkDialogComponent;
  let fixture: ComponentFixture<AddMarkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarkDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
