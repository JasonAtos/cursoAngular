import { TestBed } from '@angular/core/testing';

import { KitchendGuard } from './kitchen.guard';

describe('UserGuardGuard', () => {
  let guard: KitchendGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KitchendGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});