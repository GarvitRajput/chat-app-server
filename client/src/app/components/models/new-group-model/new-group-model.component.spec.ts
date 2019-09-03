import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupModelComponent } from './new-group-model.component';

describe('NewGroupModelComponent', () => {
  let component: NewGroupModelComponent;
  let fixture: ComponentFixture<NewGroupModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroupModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
