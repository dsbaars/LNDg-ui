import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebalancerComponent } from './rebalancer.component';

describe('RebalancerComponent', () => {
  let component: RebalancerComponent;
  let fixture: ComponentFixture<RebalancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RebalancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RebalancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
