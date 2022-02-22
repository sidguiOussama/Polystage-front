import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInternshipsComponent } from './user-internships.component';

describe('UserInternshipsComponent', () => {
  let component: UserInternshipsComponent;
  let fixture: ComponentFixture<UserInternshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInternshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInternshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
