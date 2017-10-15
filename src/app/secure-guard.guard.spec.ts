import { TestBed, async, inject } from '@angular/core/testing';

import { SecureGuardGuard } from './secure-guard.guard';

describe('SecureGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureGuardGuard]
    });
  });

  it('should ...', inject([SecureGuardGuard], (guard: SecureGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
