import { TestBed } from '@angular/core/testing';

import { HelloCommonService } from './hello-common.service';

describe('HelloCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloCommonService = TestBed.get(HelloCommonService);
    expect(service).toBeTruthy();
  });
});
