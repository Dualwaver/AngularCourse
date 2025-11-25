import { TestBed } from '@angular/core/testing';
import { InvestmentResultService } from './investment-result.service';

describe('InvestmentResultService', () => {
  let service: InvestmentResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
