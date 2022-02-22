import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipEvalutionDetailsComponent } from './internship-evalution-details.component';

describe('InternshipEvalutionDetailsComponent', () => {
  let component: InternshipEvalutionDetailsComponent;
  let fixture: ComponentFixture<InternshipEvalutionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipEvalutionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipEvalutionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
