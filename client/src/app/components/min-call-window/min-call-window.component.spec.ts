import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinCallWindowComponent } from './min-call-window.component';

describe('MinCallWindowComponent', () => {
  let component: MinCallWindowComponent;
  let fixture: ComponentFixture<MinCallWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinCallWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinCallWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
