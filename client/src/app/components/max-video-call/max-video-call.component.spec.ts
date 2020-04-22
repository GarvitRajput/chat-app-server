import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxVideoCallComponent } from './max-video-call.component';

describe('MaxVideoCallComponent', () => {
  let component: MaxVideoCallComponent;
  let fixture: ComponentFixture<MaxVideoCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxVideoCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxVideoCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
