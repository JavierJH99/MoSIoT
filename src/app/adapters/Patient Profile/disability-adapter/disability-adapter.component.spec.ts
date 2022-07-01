import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityAdapterComponent } from './disability-adapter.component';

describe('DisabilityAdapterComponent', () => {
  let component: DisabilityAdapterComponent;
  let fixture: ComponentFixture<DisabilityAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabilityAdapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabilityAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
