import { TestBed } from '@angular/core/testing';

import { RebalancerService } from './rebalancer.service';

describe('RebalancerService', () => {
  let service: RebalancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RebalancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
