import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserValidationContainerComponent } from './user-validation-container.component';

describe('UserValidationContainerComponent', () => {
  let component: UserValidationContainerComponent;
  let fixture: ComponentFixture<UserValidationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserValidationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserValidationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
