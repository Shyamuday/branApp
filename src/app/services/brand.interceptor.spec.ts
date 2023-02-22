import { TestBed } from '@angular/core/testing';

import { BrandInterceptor } from './brand.interceptor';

describe('BrandInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BrandInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BrandInterceptor = TestBed.inject(BrandInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
