import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectedModelComponent } from './disconnected-model.component';

describe('DisconnectedModelComponent', () => {
  let component: DisconnectedModelComponent;
  let fixture: ComponentFixture<DisconnectedModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisconnectedModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisconnectedModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
