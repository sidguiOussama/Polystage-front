import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInternshipComponent } from './details-internship.component';

describe('DetailsInternshipComponent', () => {
  let component: DetailsInternshipComponent;
  let fixture: ComponentFixture<DetailsInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsInternshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
