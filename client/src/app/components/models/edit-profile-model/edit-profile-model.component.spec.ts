import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileModelComponent } from './edit-profile-model.component';

describe('EditProfileModelComponent', () => {
  let component: EditProfileModelComponent;
  let fixture: ComponentFixture<EditProfileModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
