import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendModelComponent } from './add-friend-model.component';

describe('AddFriendModelComponent', () => {
  let component: AddFriendModelComponent;
  let fixture: ComponentFixture<AddFriendModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFriendModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFriendModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
