import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallModelComponent } from './call-model.component';

describe('CallModelComponent', () => {
  let component: CallModelComponent;
  let fixture: ComponentFixture<CallModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
