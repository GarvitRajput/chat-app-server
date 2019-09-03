import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsModelComponent } from './settings-model.component';

describe('SettingsModelComponent', () => {
  let component: SettingsModelComponent;
  let fixture: ComponentFixture<SettingsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
