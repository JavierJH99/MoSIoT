import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionAdapterComponent } from './condition-adapter.component';

describe('ConditionAdapterComponent', () => {
  let component: ConditionAdapterComponent;
  let fixture: ComponentFixture<ConditionAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionAdapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
